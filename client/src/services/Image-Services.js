import Axios from 'axios';

async function uploadImages(file) {

    let formData = new FormData();
    formData.append("file", file);

    return await Axios.post("http://localhost:5000/api/upload/image", formData, {
        "Content-Type": "multipart/form-data"
    })
        .then(response => response)
        .catch(error => error)
};

async function getImages(id) {
    return await Axios.get("http://localhost:5000/api/images?id=" + id)
        .then(response => response)
        .catch(error => error);
};

async function deleteImage(imageId) {
    return await Axios.delete("http://localhost:5000/api/images/" + imageId)
        .then(response => response)
        .catch(error => error);
};

export const imageServices = {
    uploadImages,
    getImages,
    deleteImage
}