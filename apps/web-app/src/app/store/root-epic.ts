import {combineEpics} from 'redux-observable';
import {authenticationEpic} from '../features/authentication/state/authentication.epic';
import {fieldsEpic} from '../features/fields/fields.epic';
import {linksEpic} from '../features/links/state/links.epic';
import {newslettersEpic} from '../features/newsletter/state/newsletters.epic';

export const rootEpic = combineEpics(
  authenticationEpic,
  linksEpic,
  newslettersEpic,
  fieldsEpic
);
