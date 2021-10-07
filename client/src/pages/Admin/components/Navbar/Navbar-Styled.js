import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
    width: 100%;
    height: 10vh;
`;

export const Section = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    margin: 0 auto;
`;

export const TitleSection = styled.div`
    width: 20%;
    height: 100%;
`;

export const NavTitle = styled.h3`
    text-align: center;
`;


// user section
export const UserSection = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const UserIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: red;

    &:hover {
        cursor: pointer;
    }
`;

export const Username = styled.p`
    padding: 10px;
    font-size: 0.9rem;
    font-style: italic;
`;
