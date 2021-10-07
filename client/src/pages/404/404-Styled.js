import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F54748;
`;

export const Section = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    color: whitesmoke;
`;

export const HeadingText = styled.h1`
    font-size: 10rem;
    padding: 0;
    margin: 0;
`;

export const MessageText = styled.p`
    padding: 0;
    margin: 0;
`;

export const Button = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid whitesmoke;
    color: whitesmoke;
    background: #F54748;

    &:hover {
        color: #F54748;
        background: whitesmoke;
    }
`;