const db = require("../models");
const Tutorial = db.tutorial;
const Comment = db.comment;

const Op = db.Sequelize.Op;

exports.createTutorial = (req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    Tutorial.create({
        title: title,
        description: description
    })
        .then(tutorial => {
            return res.json(tutorial)
        })
};

exports.createComment = (req, res) => {
    const name = req.body.name;
    const text = req.body.text;
    const tutorialId = req.body.tutorialId;

    Comment.create({
        name: name,
        text: text,
    })
        .then(comment => {

            Tutorial.findByPk(tutorialId).then(tutorial => {
                if (!tutorial) {
                    console.log("Tutorial not found");
                    return null;
                }

                comment.addTutorial(tutorial);
                console.log(`added Tutorial id=${tutorial.id} to Comment id=${comment.id}`);
                return res.json(comment);
            })
        })
        .catch(error => error)
};

exports.getAllTutorials = (req, res) => {
    const id = req.query.id;

    const condition = id ? { id: id } : null;

    Tutorial.findAll({
        where: condition,
        include: [Comment]
    })
        .then(tutorial => res.json(tutorial))
};