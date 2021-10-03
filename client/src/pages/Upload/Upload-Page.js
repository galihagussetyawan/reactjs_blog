import React, { useEffect, useState } from 'react';

// import services upload image
import { imageServices } from '../../services/Image-Services';

import ImageShow from '../../components/Image-Show/Image-Show';

function UploadPage(props) {

    const [file, setFile] = useState(null);
    const [id, setId] = useState(null);
    const [imageInfo, setImageInfo] = useState([]);
    const [imagePreview, setImagePreview] = useState();
    const [previewPopup, setPreviewPopup] = useState(false);

    const handleFileChange = event => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async event => {
        event.preventDefault();

        imageServices.uploadImages(file)
            .then(response => {
                if (response.status === 200) {
                    console.log("Images has been uploaded!")
                }
            })
    };

    // image preview before upload image
    useEffect(() => {
        if (!file) {
            setImagePreview(undefined)
            return;
        }

        const objectUrl = URL.createObjectURL(file);
        setImagePreview(objectUrl);

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [file]);




    // get images from API
    const handleChangeId = event => {
        setId(event.target.value);
    };

    const submitId = event => {
        event.preventDefault();

        imageServices.getImages(id)
            .then(response => setImageInfo(response.config.url));
    };


    // handle image popup
    const handleImagePopup = () => {
        setPreviewPopup(!previewPopup);
    }


    return (
        <div>
            <h1>Upload Page</h1>
            <input type="file" onChange={handleFileChange} />
            {file === null ? '' : <button onClick={handleImagePopup} >Preview</button>}
            <button onClick={handleUpload}>Upload</button>
            <div>
                <input onChange={handleChangeId} />
                <button onClick={submitId} >Submit</button>
            </div>
            {imageInfo && <img src={imageInfo}></img>}
            {previewPopup && <ImageShow src={imagePreview} onClick={handleImagePopup} />}
        </div>
    );
};

export default UploadPage;

