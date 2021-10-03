const fs = require('fs');

const db = require('../models');
const Image = db.images;
const Post = db.post;


exports.uploadImages = async (req, res) => {

    if (req.file === undefined) {
        return res.status(400).send("You must select images.");
    }

    const name = req.file.originalname;
    const type = req.file.mimetype;
    const data = req.file.path;

    Image.create({
        name: name,
        type: type,
        data: data
    })
        .then(image => {
            return res.status(200).send({
                message: "Images has been uploaded",
                body: image
            });

        })

        .catch(error => res.send(`Error when trying uploaded images: ${error.response}`))
};

exports.getImage = async (req, res) => {
    const imageId = parseInt(req.query.id);

    Image.findOne({
        where: {
            id: imageId
        }
    })
        .then(response => {

            // handle error if id not found
            if (!response) {
                res.status(404).send({ message: "Images not found" })
            }

            // read file images from storage with path on Images database
            const data = fs.readFile(response.data, (err, data) => {
                res.end(data)
            })

            return data;
        })

        .catch(error => error.response);
};

//delete method image
exports.deleteImage = (req, res) => {
    const imageId = req.params.imageId;

    Image.destroy({
        where: {
            id: imageId
        }
    })
        .then(response => res.json(response))
        .catch(error => error)
};