import styled from 'styled-components';


// Information Post/Draft/Visit

export const StatusSection = styled.div`
    width: 90%;
    height: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;


export const PostStatus = styled.div`
    width: 20%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 12px;
    background: #F54748;
`;

export const DraftStatus = styled.div`
    width: 20%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 12px;
    background: #343F56;
`;

export const VisitedStatus = styled.div`
    width: 20%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 12px;
    background: #FB9300;
`;

export const CountStatus = styled.h2`
    padding: 0;
    margin: 0;
    font-size: 3rem;
    color: whitesmoke;
`;

export const InformationTitle = styled.p`
    padding: 0;
    color: whitesmoke;
`;