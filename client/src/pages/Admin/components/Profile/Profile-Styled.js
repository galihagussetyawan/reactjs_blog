import styled from "styled-components";;

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px 0 0 0;
    overflow: hidden;
    background: #f6f6f6;
`;

export const Section = styled.div`
    width: 90%;
    height: 90%;
`;

export const HeadingTitle = styled.h2`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0 30px;
`;

export const InnerSection = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: space-between;
`;

export const RowSection = styled.div`
    width: ${props => props.width};
    height: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    background: white;
`;

export const MenuNav = styled.ul`
    width: 70%;
    height: 100%;
    list-style: none;
    padding: 0;
    margin: 40px 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 25px;
`;

export const MenuItem = styled.li`
    cursor: pointer;
    height: 7%;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: gray;
    
    &:hover {
        color: black;
        border-right: 3px solid red;
    }
`;

export const ColumnSection = styled.div`
    width: 60%;
    height: fit-content;
    display: flex;
    justify-content: ${props => props.justifyContent};
    flex-wrap: wrap;
    gap: 10px;
`;

export const PhotoProfile = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: red;
`;

export const CardIInside = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
`;

export const TextName = styled.p`
    padding: 0;
    margin: 0;
`;

export const TextLite = styled.p`
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
    color: ${props => props.color};
`;

export const Input = styled.input`
    width: 200px;
    height: 25px;
    border: 1px solid lightgray;
    border-radius: 5px;

    &:focus {
        outline: none;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`;