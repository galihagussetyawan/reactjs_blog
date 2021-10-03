import styled from 'styled-components';

export const DashboardContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    border: 1px solid gainsboro;
    border-radius: 30px 0 0 0;
    overflow: hidden;
    overflow-y: scroll;
    background: whitesmoke;
`;

export const InformationPostSection = styled.div`
    width: 90%;
    margin: 0 auto;
`;

export const ColumnSection = styled.div`
    width: 90%;
    padding-top: 30px;
    display: flex;
    margin: 0 auto;
    font-size: 0.8rem;
    text-align: center;
`;

export const TitleColumn = styled.p`
    width: 40%;
`;

export const CreationDateColumn = styled.p`
    width: 20%;
`;

export const LastUpdateColumn = styled.p`
    width: 20%;
`;

export const CategoryColumn = styled.p`
    width: 20%;
`;

export const ActionsColumn = styled.p`
    width: 20%;
`;