import React, { useEffect, useState } from 'react';

//import styled components
import { Container, Section, HeadingTitle, InnerSection, RowSection, MenuNav, MenuItem, ColumnSection, PhotoProfile, CardIInside, TextName, TextLite, Input } from './Profile-Styled';

//import ui-core
import Button from '../../../../components/core-ui/Buttons/Buttons';

//imoprt services
import { userService } from '../../../../services/User-Service';
import { authenticationService } from '../../../../services/Authentication-Service';

//import core-ui
import Alert from '../../../../components/core-ui/Alert/Alert';

//import helpers
import { history } from '../../../../helpers/History';

function Profile(props) {

    const [id, setId] = useState("");
    const [username, setUsername] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();

    //alert status
    const [statusAlert, setStatusAlert] = useState();
    const [messageAlert, setMessageAlert] = useState();
    const [toggleAlert, setToggleAlert] = useState(false);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("currentUser"));

        setId(data.id);
        setUsername(data.username);
        setFirstname(data.firstname);
        setLastname(data.lastname);
        setEmail(data.email);
    }, []);


    //handle change
    const handleFirstname = event => {
        setFirstname(event.target.value);
    };

    const handleLastname = event => {
        setLastname(event.target.value);
    };

    const handleUsername = event => {
        setUsername(event.target.value);
    };

    const handleEmail = event => {
        setEmail(event.target.value);
    };

    //handle update
    const handleUpdate = () => {
        userService.updateUser(id, username, firstname, lastname, email)
            .then(response => {
                if (response.status === 200) {
                    setStatusAlert("Success");
                    setMessageAlert("Login ulang untuk melihat perubahan");
                    setToggleAlert(!toggleAlert);
                }

                console.log(response)
            })
            .catch(error => error);
    };

    const handleSignout = () => {
        history.push("/admin");
        authenticationService.logout();
    };


    return (
        <Container>
            <Section>
                <HeadingTitle>User Profile</HeadingTitle>
                <InnerSection>
                    <RowSection width="20%">
                        <MenuNav>
                            <MenuItem>User Info</MenuItem>
                            <MenuItem>Favorite</MenuItem>
                            <MenuItem>Setting</MenuItem>
                            <MenuItem>Notifications</MenuItem>
                        </MenuNav>
                    </RowSection>

                    <RowSection width="76%">
                        <ColumnSection>
                            <PhotoProfile></PhotoProfile>
                            <CardIInside>
                                <TextName>Galih Setyawan</TextName>
                                <TextLite color="gray">Trenggalek, Indonesia</TextLite>
                            </CardIInside>

                        </ColumnSection>

                        <ColumnSection justifyContent="space-between">
                            <CardIInside>
                                <TextLite>Name</TextLite>
                                <Input onChange={handleFirstname} value={firstname}></Input>
                            </CardIInside>

                            <CardIInside>
                                <TextLite>Full Name</TextLite>
                                <Input onChange={handleLastname} value={lastname}></Input>
                            </CardIInside>
                        </ColumnSection>

                        <ColumnSection justifyContent="space-between">
                            <CardIInside>
                                <TextLite>Username</TextLite>
                                <Input onChange={handleUsername} value={username}></Input>
                            </CardIInside>

                            <CardIInside>
                                <TextLite>Email</TextLite>
                                <Input onChange={handleEmail} value={email}></Input>
                            </CardIInside>
                        </ColumnSection>

                        <ColumnSection justifyContent="space-between">
                            <CardIInside>
                                <TextLite>Location</TextLite>
                                <Input></Input>
                            </CardIInside>

                            <CardIInside>
                                <TextLite>Postal code</TextLite>
                                <Input></Input>
                            </CardIInside>
                        </ColumnSection>

                        <ColumnSection>
                            <Button text="Discard" />
                            <Button text="Save" theme="main" onClick={handleUpdate} />
                        </ColumnSection>
                    </RowSection>
                </InnerSection>
            </Section>

            {toggleAlert && <Alert status={statusAlert} message={messageAlert} onClick={handleSignout} />}
        </Container>
    );
};

export default Profile;