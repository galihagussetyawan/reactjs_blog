const imageUpload = require('../middleware/upload');
const imageMiddleware = require('../middleware/image-middleware');
const imagesController = require('../controllers/Images-Controller');

module.exports = function (app) {

    // route get images by params :id
    app.get("/api/images", imagesController.getImage);

    // route upload images
    app.post("/api/upload/image", imageUpload.single('file'), imagesController.uploadImages);

    app.post("/api/upload/post", imageUpload.single('upload'), (req, res) => {
        console.log("Succcess Upload")
    });

    //delete
    app.delete("/api/images/:imageId", imageMiddleware.deleteImage, imagesController.deleteImage);

}