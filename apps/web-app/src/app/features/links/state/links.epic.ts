import {combineEpics} from 'redux-observable';
import {fetchLinksEpic} from './fetch-links/fetch-links.epic';

export const linksEpic = combineEpics(
    fetchLinksEpic,
)