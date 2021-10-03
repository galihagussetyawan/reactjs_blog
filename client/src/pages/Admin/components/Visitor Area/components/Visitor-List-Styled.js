import styled from "styled-components";

export const VisitorContainer = styled.div`
    width: 90%;
    height: 100%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    background: white;
`;

export const ColumnSection = styled.div`
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    background: ${props => props.background === true ? "white" : "#f6f6f6"};
`;

export const InnerSection = styled.div`
    width: 90%;
    height: 90%;
    margin: 0 auto;
`;

export const IPColumn = styled.div`
    width: 20%;
`;

export const CountryCodeColumn = styled.div`
    width: 10%;
`;

export const CountryNameColumn = styled.div`
    width: 20%;
`;

export const CityColumn = styled.div`
    width: 15%;
`;

export const StateColumn = styled.div`
    width: 15%;
`;

export const PageColumn = styled.div`
    width: 10%;
`;

export const OSColumn = styled.div`
    width: 10%;
`;