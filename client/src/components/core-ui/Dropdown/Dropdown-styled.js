import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DropdownListContainer = styled.nav`
    min-width: 20vw;
    position: absolute;
    top: 50px;
    text-align: left;
    box-shadow: 2px 6px 21px -2px rgba(0,0,0,0.75);
    border-radius: 8px;
    overflow: hidden;
    background: ghostwhite;

    visibility: ${props => props.visibility === true ? "visible" : "hidden"};
	opacity: ${props => props.visibility === true ? "1" : "0"};
	transition: visibility 0.2s linear,opacity 0.2s linear;
`;

export const DropdownList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    list-style: none;
`;

export const ListItem = styled(Link)`
    padding: 10px;
    border-bottom: solid 1px whitesmoke;
    text-decoration: none;
    font-size: 0.9rem;
    color: black;

    &:hover {
        border-bottom: solid 1px #FFF4F2;
        background: #FFF4F2;
        color: #FF033E;
    }
`;