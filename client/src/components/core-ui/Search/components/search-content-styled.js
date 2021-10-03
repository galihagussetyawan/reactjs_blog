import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    min-height: min-content;
    max-height: 400px;
    position: absolute;
    top: 75px;
    left: 0;
    right: 0;
    text-align: left;
    box-shadow: 2px 6px 21px -2px rgba(0,0,0,0.75);
    border-radius: 8px;
    overflow-y: scroll;
    background: ghostwhite;
`;

export const Section = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
    margin: 20px auto;
`;

export const Heading = styled.p`
    font-size: 0.9rem;
    padding-bottom: 20px;
    margin: 0;
    color: gray;
`;

export const Card = styled(Link)`
    width: 100%;
    display: flex;
    text-decoration: none;
    border-radius: 8px;
    color: black;

    &:hover {
        color: #FF033E;
        background: #FFF4F2;
    }
`;

export const Title = styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
`;
