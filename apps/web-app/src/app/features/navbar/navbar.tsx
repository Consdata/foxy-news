import {Toolbar} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {logout} from '../authentication/state/logout/logout.action';

const ActionButton = styled(props => <Button color="inherit" {...props}>{props.children}</Button>)`
    min-width: 0;
`;

const Filler = styled.div`
    flex: 1;
`;

const MenuSpacer = styled.div`
    height: 20px;
    border-right: 1px solid white;
    margin: 0 8px;
`;

const NavbarView = ({onLogout}: ConnectedProps<typeof connector>) => (
    <AppBar position="static">
        <Toolbar>
            <div>Foxy</div>
            <MenuSpacer />
            <ActionButton color="inherit" component={Link} to="/links">Links</ActionButton>
            <Filler/>
            <ActionButton onClick={onLogout}>Logout</ActionButton>
        </Toolbar>
    </AppBar>
);

const connector = connect(
    undefined,
    {
        onLogout: () => logout()
    }
);

export const Navbar = connector(NavbarView);
