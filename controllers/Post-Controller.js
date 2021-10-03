const db = require('../models');
const Post = db.post;
const Image = db.images;
const Category = db.category;
const VisitorPost = db.visitorPost;

const Op = db.Sequelize.Op;

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

exports.createPost = (req, res) => {

    // content save to database
    const title = req.body.title;
    const content = req.body.content;

    const imagesId = req.body.id;
    const categoryId = req.body.selectedCategory;

    Post.create({
        title: title,
        content: content,
        categoryId: categoryId
    })
        .then(post => {

            if (imagesId) {
                Image.findAll({
                    where: {
                        id: imagesId
                    }
                })
                    .then(image => {
                        post.addImage(image).then(() => res.json(post))
                    })
            }

        })
        .catch(error => res.status(500).send({ message: error.message }));
};

exports.getAllPost = (req, res) => {
    const limit = parseInt(req.query.size);

    // jika ada query limit
    if (limit) {
        Post.findAll({
            limit: limit,
            include: [Image, Category]
        })
            .then(post => res.json(post))
            .catch(error => error);
    } else {
        Post.findAll({
            include: [Image]
        })
            .then(post => res.json(post))
            .catch(error => error);
    }

};

exports.getPost = (req, res) => {
    const id = req.params.id;

    Post.findOne({
        where: {
            id: id,
        },
        include: [Category, Image]
    })
        .then(post => {
            res.json(post)
        })
};

exports.getLatestPost = (req, res) => {
    const limit = parseInt(req.query.size);

    Post.findAll({
        limit: limit,
        order: [
            ["id", "DESC"]
        ],
        include: [Image, Category]
    })
        .then(post => res.json(post))
};

// update content
exports.updatePost = (req, res) => {

    const id = req.params.id;
    const title = req.body.title;
    const content = req.body.content;
    const categoryId = req.body.selectedCategory;

    Post.update({
        title: title,
        content: content,
        categoryId: categoryId
    }, {
        where: {
            id: id
        }
    })
        .then(num => {
            if (num == 1) {
                res.send({ messsge: "Success update" });
            } else {
                res.send({ message: "Cannot update post id =" + id })
            }
        })
        .catch(error => res.send({ message: "Error updating post id=" + id }))
};


exports.getTestPost = (req, res) => {
    const { page, size, id } = req.query;
    const condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

    const { limit, offset } = getPagination(page, size);

    Post.findAndCountAll({
        where: condition,
        limit,
        offset,
        order: [
            ["id", "DESC"]
        ],
        include: [Category, Image]
    })
        .then(data => {
            const response = getPagingData(data, page, limit);

            return res.json(response);
        })
        .catch(error => error)
};

exports.getPostByCategory = (req, res) => {
    const category = parseInt(req.query.id);

    Post.findAll({
        where: {
            categoryId: category
        },
        include: [Category, Image]
    })
        .then(response => res.json(response))
};

exports.getTestPostById = (req, res) => {
    const id = req.params.id;

    Post.findAll({
        where: {
            id: id
        },
        include: [Image, Category]
    })
        .then(response => res.json(response))
};

exports.getTrendingPost = (req, res) => {
    VisitorPost.findAll({
        order: [
            ["visitor", "DESC"]
        ],
        limit: 6,
        include: [{
            model: Post,
            include: [{
                model: Image,
            }]
        }]
    })
        .then(response => res.json(response))
};


//search
exports.getSearchPost = (req, res) => {
    const searchQuery = req.query.search;

    Post.findAll({
        where: {
            [Op.or]: [{
                title: { [Op.like]: '%' + searchQuery + '%' }
            }]
        },
        attributes: ["id", "title", "createdAt"],
        include: [Image]
    })
        .then(response => res.json(response))
        .catch(error => error)
};


//delete post method
exports.deletePostById = (req, res) => {
    const postId = req.params.postId;

    VisitorPost.destroy({
        where: {
            postId: postId
        }
    })
        .then(visitorRes => {
            Post.destroy({
                where: {
                    id: postId
                }
            })
                .then(response => response)

        })
        .catch(error => error)
};