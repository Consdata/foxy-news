import {Toolbar} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {AppState} from '../../state/app-state';
import {logout} from '../authentication/state/logout/logout.action';
import {SelectField} from '../fields/select-field/select-field';

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

const NavbarView = ({onLogout, field}: ConnectedProps<typeof connector>) => (
  <AppBar position="static">
    <Toolbar>
      <ActionButton color="inherit" component={Link} to="/">Foxy</ActionButton>
      <MenuSpacer/>
      <SelectField/>
      <MenuSpacer/>
      <ActionButton color="inherit" component={Link} to="/links">Links</ActionButton>
      <ActionButton color="inherit" component={Link} to={`/newsletters`}>Newsletters</ActionButton>
      <Filler/>
      <ActionButton onClick={onLogout}>Logout</ActionButton>
    </Toolbar>
  </AppBar>
);

const connector = connect(
  (state: AppState) => ({
    field: state.fields?.field?.id
  }),
  {
    onLogout: () => logout()
  }
);

export const Navbar = connector(NavbarView);

