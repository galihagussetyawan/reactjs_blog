import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-top: 20px;
`;

export const Section = styled.div`
    width: 60%;
    height: 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`;

export const Button = styled.button`
    width: 50px;
    height: 40px;
    border: 1px solid;
    border-radius: 8px;
    cursor: pointer;
    background: ${props => props.background === true ? "gainsboro" : "white"};
`;