const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/auth-config');
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

exports.signup = (req, res) => {

    //Save use to database
    User.create({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then(user => {
            if (req.body.roles) {
                Role.findAll({
                    where: {
                        role_name: {
                            [Op.or]: req.body.roles
                        }
                    }
                })
                    .then(roles => {
                        user.setRoles(roles).then(() => res.send({ message: "User was registered successfully" }));
                    });

            } else {

                //user role = 1
                user.setRoles([1]).then(() => res.send({ message: "User was registered successfully" }));
            }
        })
        .catch(err => res.status(500).send({ message: err.message }));
};




exports.signin = (req, res) => {

    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "User not found" });
            }

            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            // if wrong password
            if (!passwordIsValid) {
                return res.status(401).send({ message: "Invalid Password!" });
            }

            let token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400
            });


            let authorities = [];
            user.getRoles().then(roles => {
                for (let i = 0; i < roles.length; i++) {
                    authorities.push("ROLE_" + roles[i].role_name.toUpperCase());
                }
                res.status(200).send({
                    id: user.id,
                    username: user.username,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    roles: authorities,
                    accessToken: token
                });
            });
        })
        .catch(err => res.status(500).send({ message: err.message }))
};