const testController = require("../controllers/Test-Controller");

module.exports = function (app) {

    app.post("/api/test/tutorial", testController.createTutorial);
    app.post("/api/test/comment", testController.createComment);
    app.get("/api/test/tutorial", testController.getAllTutorials);
}