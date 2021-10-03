import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const SectionContent = styled.div`
    width: 100%;
    height: 100px;
    border-radius: 8px;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.03);
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    background: white;
`;

export const ContentCard = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
`;

export const TitleDescriptionSection = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f7df1e;
`;

export const IconText = styled.p`
    font-size: 1rem;
`;

export const InnerSection = styled.div`
    width: 80%;
    height: 100%;
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const TitleContent = styled.p`
    margin: 0;
`;

export const CreationDate = styled.div`
    width: 20%;
    text-align: center;
`;

export const LastUpdate = styled.div`
    width: 20%;
    text-align: center;
`;

export const Category = styled.div`
    width: 20%;
    text-align: center;
`;

export const Actions = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`;

export const DeleteButton = styled.button`
    width: 60px;
    height: 40px;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid silver;
    background: whitesmoke;

    &:hover {
        background: silver;
    }
`;

export const EditButton = styled(Link)`
    width: 60px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 8px;
    border: 1px solid silver;
    color: black;
    background: whitesmoke;

    &:hover {
        background: silver;
    }
`;