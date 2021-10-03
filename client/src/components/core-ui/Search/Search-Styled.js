import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 28px;
    border: 1px solid gainsboro;
    border-radius: 10px;
    outline: none;
    font-size: 0.9rem;

    padding: 0 10px;

    &:focus {
        border: 1px solid red;
    }

    &::placeholder {
        text-align: center;
    }
`;