import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 150px;
    height: 150px;
    position: absolute;
    top: 10vh;
    border-radius: 8px 8px 8px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;

    box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
`;

export const Section = styled.div`
    width: 80%;
    height: 90%;
`;

export const DropdownList = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;

`;

export const ListItem = styled.li`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
`;

export const ListLink = styled(Link)`
    padding: 0;
    margin: 0;
    margin-left: 15px;
    text-decoration: none;
    color: black;
`;