import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 70vw;
    margin: auto;
    display: flexbox;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
export const HeaderSection = styled.div`
    width: 100%;
    height: 100%;
    border-bottom: 1px solid lightgray;
`;

export const HeaderLogo = styled.h1`
    text-align: center;
    color: red;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`;