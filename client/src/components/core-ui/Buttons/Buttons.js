import styled from 'styled-components';

const DynamicButton = styled.button`
    width: 80px;
    height: 30px;
    font-size: small;
    border: solid 1px gainsboro;
    border-radius: 20px;
    color: ${props => props.theme === "main" ? "white" : "gray"};
    background: ${props => props.theme === "main" ? "red" : "white"};


    /* &:hover {
        border: none;
        color: white;
        background: red;
    }; */
    cursor: pointer;
`;

function Button(props) {
    return <DynamicButton name={props.name} theme={props.theme} onClick={props.onClick}>{props.text}</DynamicButton>
};

export default Button;