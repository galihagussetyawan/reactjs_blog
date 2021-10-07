const getCategory = require('../middleware/get-category');
const postController = require('../controllers/Post-Controller');
const imageMiddleware = require('../middleware/upload');

module.exports = function (app) {

    app.get("/api/category", getCategory);
    app.get("/api/post/latest", postController.getLatestPost);
    app.get("/api/post/all", postController.getAllPost);
    app.get("/api/post/:id", postController.getPost);
    app.get("/api/category/post", postController.getPostByCategory);
    app.get("/api/trending", postController.getTrendingPost);
    app.get("/api/post", postController.getSearchPost);

    //POST METHOD
    app.post("/api/post/insert", imageMiddleware.single('file'), postController.createPost);

    //PUT METHOD
    app.put("/api/post/:id", postController.updatePost);

    app.get("/api/test/post", postController.getTestPost);
    app.get("/api/test/post/:id", postController.getTestPostById);

    //DELETE METHOD
    app.delete("/api/post/:postId", postController.deletePostById);
};