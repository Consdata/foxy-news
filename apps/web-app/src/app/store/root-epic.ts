import {combineEpics} from 'redux-observable';
import {authenticationEpic} from '../features/authentication/state/authentication.epic';
import {linksEpic} from '../features/links/state/links.epic';

export const rootEpic = combineEpics(
  authenticationEpic,
  linksEpic
);
