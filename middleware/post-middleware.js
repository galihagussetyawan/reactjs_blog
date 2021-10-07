const db = require('../models');
const Post = db.post;

const getPost = (req, res, next) => {
    Post.findAll()
        .then(results => {
            res.json(results)
        });
};

module.exports = getPost;