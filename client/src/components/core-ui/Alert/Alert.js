import React from 'react';

// import styled components
import { Container, AlertContainer, AlertSection, AlertIcon, AlertStatus, AlertMessage, Button } from './Alert-Styled';

import { FaCheck, FaExclamation } from 'react-icons/fa';



const SuccessIcon = () => <FaCheck />;

const ErrorIcon = () => <FaExclamation />;

function Alert(props) {

    const renderIcon = () => {
        if (props.status === "Success") {
            return <SuccessIcon />;
        } else {
            return <ErrorIcon />
        }
    };

    return (
        <Container>
            <AlertContainer>
                <AlertSection>
                    <AlertIcon theme={props.status}>{renderIcon()}</AlertIcon>
                    <AlertStatus>{props.status}</AlertStatus>
                    <AlertMessage>{props.message}</AlertMessage>
                    <Button theme={props.status} onClick={props.onClick}>OK</Button>
                </AlertSection>
            </AlertContainer>
        </Container>
    );
};

export default Alert;
