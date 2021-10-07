//import styled-components
import { Container, Section, DropdownList, ListItem, ListLink } from './Dropdown-Styled';

//import icons
import { UserIcon, SettingIcon, SignOut } from '../icons/icons';

function Dropdown(props) {
    return (
        <Container>
            <Section>
                <DropdownList>
                    <ListItem onClick={props.onClickUser}>
                        <UserIcon />
                        <ListLink to="/profile">Profile</ListLink>
                    </ListItem>

                    <ListItem onClick={props.onClickSetting}>
                        <SettingIcon />
                        <ListLink to="/setting">Setting</ListLink>
                    </ListItem>

                    <ListItem onClick={props.onClickSignout}>
                        <SignOut />
                        <ListLink>Logout</ListLink>
                    </ListItem>


                </DropdownList>
            </Section>
        </Container>
    );
};

export default Dropdown;