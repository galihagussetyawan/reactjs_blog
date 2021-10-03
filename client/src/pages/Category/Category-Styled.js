import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 0;
`;

export const Section = styled.div`
    width: 97%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
`;

export const CardSection = styled.div`
    width: 100%;
    display: flex;
    flex-grow: 0;
    flex-shrink: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    column-gap: 5%;
    row-gap: 5%;
`;

export const Card = styled(Link)`
    width: 30%;
    height: 400px;
    text-decoration: none;
    color: black;
    overflow: hidden;
`;

export const Image = styled.div`
    width: 100%;
    height: 60%;
    margin: 0;
    padding: 0;
    border-radius: 8px;
    background-image: url(${props => props.url});
    background-position: center;
    background-size: cover;
`;

export const Label = styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
`;

export const Date = styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
`;

export const Title = styled.h3`
    margin: 12px auto;
    padding: 0;
`;

export const Text = styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
`;