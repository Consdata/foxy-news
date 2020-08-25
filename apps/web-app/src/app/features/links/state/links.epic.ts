import {combineEpics} from 'redux-observable';
import {editLinkEpic} from './edit-link/edit-link.epic';
import {fetchLinksEpic} from './fetch-links/fetch-links.epic';

export const linksEpic = combineEpics(
  fetchLinksEpic,
  editLinkEpic,
)
