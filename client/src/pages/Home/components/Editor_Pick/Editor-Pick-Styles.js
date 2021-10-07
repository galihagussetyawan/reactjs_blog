import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 70%;
    max-height: 450px;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 200px;
        margin: 0 auto;
    }
`;

export const EditorPickContainer = styled.div`
    width: 60%;
    height: 400px;

    @media screen and (max-width: 768px) {
        width: 100%;
    } 
`;

export const Title = styled.h2`
    height: 50px;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 768px) {
        font-size: large;
        text-align: center;
    }
`;

export const EditorBorder = styled.div`
    width: 98%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: solid 1px gainsboro;
    border-radius: 8px;

    @media screen and (max-width: 768px) {
        border: none;
    }
`;

export const PopularSection = styled(Link)`
    width: 45%;
    height: 91%;
    cursor: pointer;
    text-decoration: none;
    
    &:hover {
        background: whitesmoke;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ImagePopular = styled.div`
    width: 100%;
    height: 50%;
    border-radius: 8px;
    background: url(${props => props.url});

    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const InfoPopular = styled.p`
    color: gray;
    font-size: small;
`;

export const TitlePopular = styled.h3`
    color: black;

    &:hover {
        text-decoration: underline;
    }
`;
export const TextPopular = styled.p`
    font-size: medium;
    color: grey;
`;



export const CollectionSection = styled.div`
    width: 45%;
    height: 93%;
    display: block;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Card = styled(Link)`
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    color: black;

    &:hover {
        background: whitesmoke;
    }
`;

export const CardImage = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.div`
    width: 100%;
    height: 85%;
    border-radius: 8px;
    background: url(${props => props.url});

    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const CardBody = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const TitleCard = styled.h5`
    margin: 0px;

    &:hover {
        text-decoration: underline;
    }

`;

export const DateCard = styled.p`
    margin: 0;
    font-size: small;
    color: gray;
`;




// side section
export const SideSection = styled.div`
    width: 40%;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const InfoWebSection = styled.div`
    width: 100%;
    height: 35%;
`;

export const BorderInfoWeb = styled.div`
    width: 95%;
    height: 100%;
    float: right;
    border: solid 1px gainsboro;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const InfoWebLogo = styled.h2`
    text-align: center;
    padding: 0;
    margin: 0;
    color: red;
`;

export const InfoWebText = styled.div`
    font-size: 1rem;
    text-align: center;
`;

export const CategoryTopicSection = styled.div`
    width: 100%;
    height: 60%;
`;

export const BorderCategory = styled.div`
    width: 95%;
    height: 100%;
    float: right;
    border: 1px solid gainsboro;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const CategoryHeading = styled.h2`
    padding: 0;
    margin: 0;
    text-align: center;
`;

export const CategoryList = styled.ul`
    width: 80%;
    padding: 0;
    margin: 0 auto;
`;

export const List = styled.li`
    padding: 5px 0;
    list-style: none;
    font-size: 0.9rem;
`;