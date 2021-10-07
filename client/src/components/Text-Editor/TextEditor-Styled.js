import styled from 'styled-components';


export const TextEditorContainer = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid gainsboro;
    border-radius: 30px 0 0 0;
    background: whitesmoke;
`;

// LEFT COLUMN SECTION
export const LeftColumn = styled.div`
    width: 65%;
    height: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
`;

export const TitleSection = styled.div`
    width: 100%;
`;

export const Title = styled.div`
    font-size: 1.5rem;
`;

export const InputTitle = styled.input`
    width: 99%;
    height: 25px;

    &:focus {
        font-size: 1rem;
    }
`;

export const InputImageSection = styled.div`
    width: 100%;
`;
export const InputImage = styled.input`

`;

export const TextEditorSection = styled.div`
    width: 100%;
    height: 80%;
    overflow: hidden;
`;






//RIGHT COLUMN SECTION
export const RightColumn = styled.div`
    width: 25%;
    height: 90%;
`;

export const InformationContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9px;
    background: white;
`;

export const InformationSection = styled.div`
    width: 90%;
    height: 95%;
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
`;

export const InformationTitle = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 30px;
    padding: 0;
    color: black;
`;

export const InformationStatus = styled.p`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
`;

export const InformationKey = styled.p`
    margin: 0;
    padding-right: 8px;
`;

export const InformationValue = styled.p`
    margin: 0;
    padding: 0;
    font-weight: bold;
`;

export const CategorySelect = styled.select`
    margin-left: 8px;
    font-weight: bold;
    border: 0;
    background: white;
`;

export const CategoryOption = styled.option`
    color: black;
`;