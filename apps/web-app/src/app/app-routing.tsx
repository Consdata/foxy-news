import React from 'react';
import {Route, Switch} from 'react-router';
import {PageNotFound} from './features/page-not-found/page-not-found';

export const AppRouting = () => <Switch>
  {/*<Redirect exact from="/" to="/links"/>*/}
  {/*<Route exact path="/links" component={Links}/>*/}
  <Route component={PageNotFound}/>
</Switch>;
