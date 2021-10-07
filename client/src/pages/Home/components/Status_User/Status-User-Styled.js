import styled from 'styled-components';

export const ContainerStatusUser = styled.div`
    width: 70%;
    position: relative;
    padding: 0;
    margin: 0 auto;
    background: #f6f6f6;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const StatusUser = styled.div`
    padding: 4px;
`;

export const Status = styled.p`
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 0.9rem;
    color: gray;
`;