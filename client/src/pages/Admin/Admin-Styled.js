import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdminContainer = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    display: flex;
    overflow: hidden;
`;

export const SidebarContainer = styled.div`
    width: 20vw;
    height: 100vh;
    z-index: 999;
    background: ghostwhite;
`;

export const LogoContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const LogoSection = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Logo = styled(Link)`
    text-decoration: none;
    font-size: xx-large;
    font-weight: bold;
    color: red;
`;



/* container menu */

export const MenuContainer = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
`;

export const MenuSection = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
    
    /* overflow: hidden;
    border: solid gainsboro 1px;
    border-radius: 12px; */
`;

export const MenuItem = styled.ul`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 0;

    /* border-bottom: solid 1px gainsboro; */
    
    &:hover {
        border-radius: 8px;
        background: whitesmoke;
    }
`;

export const MenuList = styled.li`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
`;

export const MenuLink = styled(Link)`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
    text-decoration: none;
    border-radius: 8px;
    font-size: 0.9rem;

    color: ${props => props.color === true ? "white" : "gray"};
    background: ${props => props.background === true ? "red" : null};

    &:hover {
        color: ${props => props.background === true ? "white" : "red"};
    }
`;

export const DashboardContainer = styled.div`
    width: 100%;
`;