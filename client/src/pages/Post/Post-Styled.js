import styled from 'styled-components';

export const PostContainer = styled.div`
    width: 70vw;
    margin: 0 auto;
    padding: 0;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0;
    }
`;

export const PostSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    @media screen and (max-width: 768px) {
        gap: 2px;
    }
`;

export const TitlePost = styled.h1`
    width: 80%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
    margin: 0;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        width: 90%;
        font-size: 1.3rem;
        margin: 0;
    }
`;

export const DatePost = styled.p`
    width: 80%;
    margin: 0;
    font-size: 1rem;

    @media screen and (max-width: 768px) {
        max-width: 90%;
    }
`;

export const ImagePost = styled.img`
    width: 100%;
    height: 500px;
    margin: 0;
    border-radius: 8px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 150px;
        border-radius: 8px;
    }
`;

export const ContentPost = styled.div`
    width: 80%;
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.6;


    //link style
    a:link {
        color: black;
    }

    a:hover {
        color: blue;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;