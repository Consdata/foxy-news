import {combineReducers} from '@reduxjs/toolkit';
import {connectRouter} from 'connected-react-router';
import {authenticationReducer} from '../features/authentication/state/authentication.reducer';
import {fieldsReducer} from '../features/fields/fields.reducer';
import {linksReducer} from '../features/links/state/links.reducer';
import {newslettersReducer} from '../features/newsletter/state/newsletters.reducer';

export const rootReducer = history => combineReducers({
  router: connectRouter(history),
  authentication: authenticationReducer,
  links: linksReducer,
  newsletters: newslettersReducer,
  fields: fieldsReducer
});
