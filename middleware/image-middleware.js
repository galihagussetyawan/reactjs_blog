const fs = require('fs');
const db = require('../models');
const Image = db.images;

deleteImage = (req, res, next) => {
    const imageId = req.params.imageId;

    Image.findOne({
        where: {
            id: imageId
        }
    })
        .then(response => {
            const filePath = response.data;

            fs.stat(filePath, (error, stats) => {
                if (error) {
                    console.log("file not found")
                }

                fs.unlinkSync(filePath);
                next();
            })

        })
        .catch(error => error)

};


const imageMiddleware = {
    deleteImage: deleteImage
};

module.exports = imageMiddleware;