const db = require('../models');
const ROLES = db.ROLES;
const User = db.user;

checkDupicateUsernameorEmail = (req, res, next) => {

    //username
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (user) {
                res.status(400).send({ message: "Failed! Username has already in use!" });
                return;
            }

            //check email
            User.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(email => {
                    if (email) {
                        res.status(400).send({ message: "Failed! Email has already in use!" });
                        return;
                    }
                    next();
                });
        });
};

checkRolesExisted = (req, res, next) => {

    const userRole = req.body.roles;

    if (userRole) {
        for (let i = 0; i < userRole.length; i++) {
            if (!ROLES.includes(userRole[i])) {
                res.status(400).send({ message: "Failed! Role doesn't exist" + userRole[i] });
                return;
            }
        }
    }
    next();
};

const verifySignup = {
    checkDupicateUsernameorEmail: checkDupicateUsernameorEmail,
    checkRolesExisted: checkRolesExisted
};

module.exports = verifySignup;