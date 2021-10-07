import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin:  0 auto;
    z-index: 999;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0, 0.5);
`;

export const AlertContainer = styled.div`
    width: 300px;
    height: 300px;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    background: white;
`;

export const AlertSection = styled.div`
    width: 80%;
    height: 100%;
    padding: 0;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AlertIcon = styled.div`
    width: 120px;
    height: 120px;
    position: absolute;
    top: 75px;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    color: white;
    background: ${props => props.theme === "Success" ? "limegreen" : "red"};
`;

export const AlertStatus = styled.h2`

`;

export const AlertMessage = styled.p`
    text-align: center;
    font-size: 0.9rem;
`;

export const Button = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    color: white;
    background: ${props => props.theme === "Success" ? "limegreen" : "red"};

    &:hover {
        background: ${props => props.theme === "Success" ? "mediumseagreen" : "crimson"};
    }
`;