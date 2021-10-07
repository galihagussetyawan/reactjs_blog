const multer = require("multer");


const filterImage = (req, file, cb) => {

    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        cb(null, true)
    } else {
        cb("Please upload only images!", false)
    }
};

const fileStorage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, 'resources/static/assets/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
});

const uploadFile = multer({ storage: fileStorage, fileFilter: filterImage });
module.exports = uploadFile;