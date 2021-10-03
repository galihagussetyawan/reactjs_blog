const db = require("../models");
const Visitors = db.visitors;
const VisitorPost = db.visitorPost;
const Post = db.post;


//pagination
const getPagination = (page, size) => {
    const limit = size ? +size : 2;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: contents } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, contents, totalPages, currentPage };
};

exports.createVisitor = (req, res) => {
    const IPAddress = req.body.IPAddress;
    const countryCode = req.body.countryCode;
    const countryName = req.body.countryName;
    const city = req.body.city;
    const state = req.body.state;
    const os = req.body.os;
    const page = req.body.page;
    const postId = req.body.postId;

    Visitors.create({
        ip_address: IPAddress,
        country_code: countryCode,
        country_name: countryName,
        city: city,
        state: state,
        os: os,
        page: page,
        postId: postId
    })
        .then(visitor => {
            return res.json(visitor);
        })
        .catch(error => error)
};

exports.getAllVisitor = (req, res) => {
    const { page, size } = req.query;

    const { limit, offset } = getPagination(page, size);

    Visitors.findAndCountAll({
        limit,
        offset
    })
        .then(data => {
            const response = getPagingData(data, page, limit);

            return res.json(response);
        })
        .catch(error => error)
};

exports.getPostVisitor = (req, res) => {

    Visitors.findAll({
        order: [
            ["postId", "DESC"]
        ]
    })
        .then(response => res.json(response))
        .catch(error => error);
};

// visitor content/post
exports.createVisitorPost = (req, res) => {
    const postId = req.body.postId;

    VisitorPost.create({
        postId: postId
    })
        .then(response => res.json(response))
};

exports.updateVisitorPost = (req, res) => {
    const postId = req.body.postId;

    VisitorPost.increment({
        visitor: +1
    }, {
        where: {
            postId: postId
        }
    })
        .then(response => res.json(response))
};