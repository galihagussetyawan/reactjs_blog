import React from 'react';

// import styled components
import { ImageShowContainer, ImageShowSection, Image } from './Image-Show-Styled';

function ImageShow(props) {
    return (
        <ImageShowContainer>
            <button style={{ position: "sticky", top: "0", float: "right" }} onClick={props.onClick} >Close</button>
            <ImageShowSection>
                <Image src={props.src} />
            </ImageShowSection>
        </ImageShowContainer>
    );
};

export default ImageShow;