const jwt = require('jsonwebtoken');
const config = require('../config/auth-config');
const db = require('../models');
const User = db.user;

verifyToken = (req, res, next) => {

    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "No token provide" });
    }

    jwt.verify(token, config.secret, (err, decode) => {
        if (err) {
            return res.status(401).send({ message: "Unautorized" });
        }

        req.userId = decode.id;
        next();
    });
};

isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].role_name === 'admin') {
                    next();
                    return;
                }
            }

            res.status(400).send({ message: "Require Admin Role" });
            return;
        });
    });
};



const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin
};

module.exports = authJwt;