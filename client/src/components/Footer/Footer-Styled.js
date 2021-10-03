import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    margin-top: 50px;
    border-top: 1px solid gainsboro;
    background: whitesmoke;
`;

export const FooterSection = styled.div`
    width: 70%;
    height: fit-content;
    display: flex;
    margin: 0 auto;
`;

export const FooterLogo = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Logo = styled.h2`
    padding: 0;
    margin: 0;
    color: red;
`;

export const Text = styled.p`
    padding: 0;
    margin: 0;
    font-size: 0.9rem;
`;

export const FooterColumn = styled.div`
    width: 17.5%;
    height: 100%;
`;

export const FooterHeader = styled.h4`

`;

export const FooterList = styled.ul`
    padding: 0;
    margin: 0;
`;

export const List = styled.li`
    list-style: none;
    font-size: 0.9rem;
`;