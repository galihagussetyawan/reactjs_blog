const { verifySignup } = require('../middleware');
const controller = require('../controllers/Auth-Controller');

module.exports = function (app) {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/signup",
        [
            verifySignup.checkDupicateUsernameorEmail,
            verifySignup.checkRolesExisted
        ],
        controller.signup
    );

    app.post("/api/signin", controller.signin);
};