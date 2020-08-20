import {combineEpics} from 'redux-observable';
import {authenticationEpic} from '../features/authentication/state/authentication.epic';

export const rootEpic = combineEpics(
  authenticationEpic
);
