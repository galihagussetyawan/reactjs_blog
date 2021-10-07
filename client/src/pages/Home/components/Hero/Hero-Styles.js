import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 70%;
    max-height: 400px;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 980px) {
        width: 100%;
        margin-top: 10px;
    }
`;

export const NewestPost = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 200px;
    }
`;

export const ImagePost = styled(Link)`
    width: 98%;
    height: 400px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-decoration: none;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7511379551820728) 35%, rgba(0,0,0,0) 100%), url(${props => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;

    &:hover {
    -webkit-filter: brightness(80%);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    }

    @media screen and (max-width: 768px) {
        width: 95%;
        height: 100%;
        border-radius: 12px;
        margin: auto;
    }
`;

export const Label = styled.p`
    width: 22%;
    font-size: small;
    text-align: center;
    color: white;
    border-radius: 20px;
    margin-top: 265px;
    margin-left: 20px;
    background: red;

    @media screen and (max-width: 768px) {
        font-size: x-small;
        margin-top: 90px;
        margin-left: 20px;
    }
`;

export const Title = styled.h1`
    margin-top: -8px;
    padding:  0 20px;
    color: azure;

    &:hover {
        text-decoration: underline 1px;
    }

    @media screen and (max-width: 768px) {
        margin-top: -7px;
        padding: 0 20px;
        font-size: larger;
    }
`;

export const Date = styled.p`
    margin-top: -20px;
    padding: 0 20px;
    font-size: smaller;
    color: azure;

    @media screen and (max-width: 768px) {
        margin-top: -10px;
        padding: 0 20px;
        font-size: x-small;
    }
`;



//Popular Recent
export const PopularRecent = styled.div`
    width: 40%;
    height: 400px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const BorderSection = styled.div`
    width: 95%;
    height: 100%;
    float: right;
    border: solid 1px gainsboro;
    border-radius: 8px;
`;

export const ButtonSection = styled.div`
    width: 60%;
    height: 15%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
`;

export const Card = styled(Link)`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
    margin: 0 auto;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background: whitesmoke;
    }
`;

export const CardImage = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: url(${props => props.url});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`;

export const CardBody = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CardTitle = styled.h4`
    cursor: pointer;
    margin-top: 12px;
    font-size: 0.9rem;
    color: black;

    &:hover {
        text-decoration: underline;
    }
`;

export const CardDate = styled.p`
    margin-top: -12px;
    font-size: 0.8rem;
    color: gray;
`;