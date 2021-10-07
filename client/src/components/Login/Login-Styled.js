import styled from 'styled-components';

export const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f1f1f1;
`;

export const LoginSection = styled.div`
    width: 30%;
    height: 70%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 12px;
    background: white;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
`;

export const LoginTitle = styled.h3`
    height: 20%;
    text-align: center;
`;

export const FormSection = styled.div`
    width: 80%;
    height: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 12px;
`;

export const LabelForm = styled.label`

`;

export const IconForm = styled.i`

`;

export const InputForm = styled.input`
    height: 30px;
    border: none;
    outline: none;
    border-bottom: 1px solid lightgray;

    &:focus {
        border-bottom: 1px solid red;
    }

    &::placeholder {
        color: lightgray;
    }
`;

export const ErrorAlert = styled.p`
    padding: 4px;
    margin: 0;
    font-size: 0.8rem;
    color: #f20f0c;
    background: #fbb4b3;
`;

export const Button = styled.button`
    padding: 8px;
    border: none;
    color: whitesmoke;
    background: red;

    &:hover {
        background: darkred;
    }
`;
