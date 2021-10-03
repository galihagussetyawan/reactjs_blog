import React, { useEffect, useState } from 'react';

//import styled components
import { LoginContainer, LoginSection, LoginTitle, FormSection, Form, LabelForm, InputForm, ErrorAlert, Button } from './Login-Styled';

import { GlobalStyle as StyleAll } from '../core-ui/GlobalStyle';

// import services
import { authenticationService } from '../../services/Authentication-Service';

function Login(props) {

    const [error, setError] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    // handle change for username input
    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    };

    // handle change for password input
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    };

    const submitLogin = async e => {
        e.preventDefault();

        authenticationService.login(username, password)
            .then(response => {

                // handle error if empty username or password
                if (username || password) {
                    if (username === undefined) {
                        return setError('username tidak boleh kosong')
                    }
                    if (password === undefined) {
                        return setError('password tidak boleh losong')
                    }
                } else if (username === undefined && password === undefined) {
                    return setError("username atau password tidak boleh kosong")
                }

                // error status handling 
                if (response.status !== 200) {
                    if (response.status === 404) {
                        return setError("username tidak ditemukan")
                    } else if (response.status === 401) {
                        return setError("password anda salah")
                    }
                }


                // alert("Berhasil Login")
                const { from } = props.location.state || { from: { pathname: "/admin" } };
                props.history.push(from);

            })
    };

    // redirect to home if already logged in
    if (authenticationService.currentUserValue) {
        setTimeout(() => props.history.push('/admin'), 500)
    }

    return (
        <LoginContainer>
            <StyleAll />
            <LoginSection>
                <LoginTitle>LOGIN PAGE</LoginTitle>

                <FormSection>
                    <Form onSubmit={submitLogin}>

                        {error && <ErrorAlert>{error}</ErrorAlert>}

                        <LabelForm>Username</LabelForm>
                        <InputForm onChange={handleChangeUsername} placeholder="Type your username"></InputForm>
                        <LabelForm>Password</LabelForm>
                        <InputForm onChange={handleChangePassword} placeholder="Type your password" type="password"></InputForm>
                        <Button type="submit">Sign In</Button>
                    </Form>
                </FormSection>
            </LoginSection>
        </LoginContainer>
    );
};

export default Login;