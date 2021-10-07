import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 70%;
    height: 100%;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 200px;
        margin: 0 auto;
    }
`;

export const TrendingContainer = styled.div`
    width: 60%;
    height: 100%;
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

export const TrendingBorder = styled.div`
    width: 98%;
    height: 600px;
    border: solid 1px gainsboro;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
        border: none;
    }
`;

export const MainTrendingSection = styled.div`
    width: 100%;
    height: 55%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const MainTrendingCard = styled(Link)`
    cursor: pointer;
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    color: black;

    &:hover {
        background: whitesmoke;
    }
`;

export const MainImage = styled.img`
    width: 100%;
    height: 60%;
    border-radius: 8px;
    background: url(${props => props.url});

    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const MainDate = styled.p`
    padding: 0;
    margin: 0;
    font-size: 0.9rem;
`;

export const MainTitle = styled.h3`
    padding: 0;
    margin: 0;

    &:hover {
        text-decoration: underline;
    }
`;

export const MainDescription = styled.p`
    padding: 0;
    margin: 0;
    font: 0.8rem;
    color: gray;
`;



// sub trending
export const SubTrendingSection = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;

export const SubTrendingCard = styled(Link)`
    cursor: pointer;
    width: 45%;
    height: 41%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: black;

    &:hover {
        background: whitesmoke;
    }
`;

export const MiniImage = styled.div`
    width: 40%;
    height: 100%;
    border-radius: 8px;
    
    background: url(${props => props.url});

    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const MiniTitle = styled.h5`
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        text-decoration: underline;
    }
`;


/* side ternding section */
export const SideTrendingConteiner = styled.div`
    width: 40%;
    height: 650px;
    float: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const NewsLetterSection = styled.div`
    width: 100%;
    height: 48%;
`;

export const NewsLetterBorder = styled.div`
    width: 95%;
    height: 100%;
    float: right;
    border: solid 1px gainsboro;
    border-radius: 8px;
`;

export const CelebrationSection = styled.div`
    width: 100%;
    height: 48%;
`;

export const CelebrationBorder = styled.div`
    width: 95%;
    height: 100%;
    float: right;
    border: solid 1px gainsboro;
    border-radius: 8px;
`;