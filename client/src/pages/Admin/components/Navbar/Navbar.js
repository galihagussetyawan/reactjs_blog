//import styled components
import React, { useEffect, useState } from 'react';

import { NavbarContainer, Section, TitleSection, NavTitle, UserSection, UserIcon, Username } from './Navbar-Styled';

// import icons
import { SignOut } from '../icons/icons';

// import services
import { authenticationService } from '../../../../services/Authentication-Service';

// import helpers
import { history } from '../../../../helpers/History';

//import components
import Dropdown from './Dropdown';

function Navbar(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("currentUser"));

        if (data) {
            setUsername(data.username);
            setFirstname(data.firstname);
            setLastname(data.lastname);
        }

    }, [])


    // logout action
    const signOut = () => {
        history.push("/");
        authenticationService.logout();
    };

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavbarContainer>
            <Section>
                <TitleSection>
                    <NavTitle>Dashboard</NavTitle>
                </TitleSection>

                <UserSection>
                    <Username>hi, {firstname} {lastname}</Username>
                    <UserIcon onClick={handleDropdown}>{firstname.charAt(0).toUpperCase()}</UserIcon>

                    {isOpen &&
                        <Dropdown
                            onClickSignout={signOut}
                        />
                    }

                </UserSection>

            </Section>
        </NavbarContainer>
    );
};

export default Navbar;