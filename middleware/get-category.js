const db = require('../models');
const Category = db.category;

const getCategory = (req, res, next) => {
    Category.findAll({
        attributes: ['id', 'category_name']
    })
        .then(results => {
            res.json(results);
        });
};

module.exports = getCategory;