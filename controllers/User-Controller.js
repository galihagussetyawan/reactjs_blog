const db = require('../models');
const User = db.user;


exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Page")
};


exports.updateUser = (req, res) => {
    const id = req.params.id;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const email = req.body.email;

    User.update({
        username: username,
        firstname: firstname,
        lastname: lastname,
        email: email
    }, {
        where: {
            id: id
        }
    })
        .then(user => {
            if (user == 1) {
                res.send({ message: "Success uupdate" });
            } else {
                res.send({ message: "Cannot updating user id =" + id })
            }
        })
        .catch(error => res.send({ message: "Error updating user id =" + id }))
};