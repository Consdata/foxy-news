import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router';
import {AppState} from '../../../../state/app-state';
import {Newsletters} from '../../../newsletter/components/newsletters';
import {LoginWait} from '../login-wait/login-wait';
import {Login} from '../login/login';

export const UnauthenticatedAppView = ({authenticated}: ViewProps) => <div>
  {authenticated === undefined && <LoginWait/>}
  {authenticated === true && <Redirect to='/'/>}
  {authenticated === false && <Switch>
    <Route path='/login' component={Login}/>
    <Route path='/newsletters' component={Newsletters}/>
    <Redirect to='/login'/>
  </Switch>}
</div>;

interface ViewProps extends ConnectedProps<typeof connector> {
}

const connector = connect(
  (state: AppState) => ({
    authenticated: state.authentication.authenticated
  })
);

export const UnauthenticatedApp = connector(UnauthenticatedAppView);
