import styled from 'styled-components';

export const ImageShowContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    overflow-y: scroll;
    z-index: 999;
    background: rgba(0,0,0, 0.5);

`;

export const ImageShowSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: auto;
`;

export const Image = styled.img`
    width: 90%;
    padding: 0;
    margin: 0 auto;
`;