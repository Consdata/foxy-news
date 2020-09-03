import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import {CreateNewsletter} from './features/links/components/create-newsletter';
import {PendingLinks} from './features/links/components/pendnig-links';
import {Newsletters} from './features/newsletter/components/newsletters';
import {PageNotFound} from './features/page-not-found/page-not-found';

export const AppRouting = () => <Switch>
  <Redirect exact from="/" to="/links"/>
  <Route exact path="/links" component={PendingLinks}/>
  <Route exact path="/links/newsletter" component={CreateNewsletter}/>
  <Route exact path="/newsletters" component={Newsletters}/>
  <Route component={PageNotFound}/>
</Switch>;
