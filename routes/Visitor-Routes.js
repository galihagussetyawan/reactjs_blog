const visitorsController = require("../controllers/Visitors-Controller");

module.exports = function (app) {
    app.post("/api/visitor", visitorsController.createVisitor);
    app.get("/api/visitor/all", visitorsController.getAllVisitor);

    //visitors post
    app.get("/api/visitor", visitorsController.getPostVisitor);
    app.post("/api/visitor/post", visitorsController.createVisitorPost);
    app.put("/api/visitor/post", visitorsController.updateVisitorPost);
}