import { ContainerStatusUser, StatusUser, Status } from './Status-User-Styled';

function AlertStatus(props) {
    return (
        <ContainerStatusUser>
            <StatusUser>
                <Status>Hi, {props.username} . Kamu berhasil login menjadi admin role !!</Status>
            </StatusUser>
        </ContainerStatusUser>
    );
};

export default AlertStatus;