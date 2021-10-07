const { authJwt } = require('../middleware/index');
const userController = require('../controllers/User-Controller');

module.exports = function (app) {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        userController.adminBoard
    );


    app.put("/api/users/:id", userController.updateUser);
};