import {CircularProgress, TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import React, {useState} from 'react';
import {connect, ConnectedProps} from 'react-redux'
import {RouteComponentProps} from 'react-router';
import styled from 'styled-components';
import {firebaseApp} from '../../../firebase/firebase.app';
import {FullScreenCentered} from '../../../layout/full-screen-centered';

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 250px;
`;

const SecondaryLink = styled(Link)`
    cursor: pointer;
`;

const FullWithTextField = styled(TextField)`
    width: 100%;
    margin-bottom: 4px;
`;

const Spacer = styled.div`
    margin-bottom: 16px;
`;

const ErrorMessage = styled.div`
    color: red;
`;

const LoginView = ({history}: ConnectedProps<typeof connector> & RouteComponentProps) => {
    const [state, setState] = useState({
        email: '',
        password: '',
        message: '',
        authenticating: false
    });
    const handleChange = event => {
        setState({
            ...state,
            [event.target.id]: event.target.value,
            message: undefined
        });
    }
    const submit = event => {
        event.preventDefault();
        setState({...state, authenticating: true});
        firebaseApp.auth().signInWithEmailAndPassword(state.email, state.password).then(
            () => {
            },
            error => setState({
                ...state,
                message: error.message,
                authenticating: false
            })
        );
    };
    const redirectToRestore = () => history.push('/reset');
    const redirectToRegister = () => history.push('/register');
    return <FullScreenCentered>
        {!state.authenticating && <Form onSubmit={ev => submit(ev)}>
            <FullWithTextField label="Email"
                               id="email"
                               autoComplete="username"
                               value={state.email}
                               onChange={handleChange}
            />
            <FullWithTextField label="Password"
                               type="password"
                               id="password"
                               autoComplete="current-password"
                               value={state.password}
                               onChange={handleChange}
            />
            {state.message && <ErrorMessage>{state.message}</ErrorMessage>}
            <Spacer/>
            <Button color="primary" type="submit">Login</Button>
            <SecondaryLink color="textSecondary" onClick={redirectToRestore}>Reset password</SecondaryLink>
            <SecondaryLink color="textSecondary" onClick={redirectToRegister}>Create account</SecondaryLink>
        </Form>}
        {state.authenticating && <CircularProgress size={50}/>}
    </FullScreenCentered>;
};

const connector = connect(
    undefined,
    undefined
);

export const Login = connector(LoginView);
