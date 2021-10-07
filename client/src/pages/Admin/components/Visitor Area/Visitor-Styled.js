import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    border-radius: 30px 0 0 0;
    overflow-y: scroll;
    border: 1px solid gainsboro;
    background: #f6f6f6;
`;

export const VisitorContainer = styled.div`
    width: 90%;
    height: 450px;
    max-height: 450px;
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    background: white;
`;

export const HeadingTitle = styled.h1`

`;

export const ColumnSection = styled.div`
    width: 90%;
    display: flex;
    border-bottom: 1px solid gainsboro;
    font-size: 0.9rem;
    color: gray;
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