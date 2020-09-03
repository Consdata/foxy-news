import {combineEpics} from 'redux-observable';
import {fetchNewslettersEpic} from './fetch-newsletters/fetch-newsletters.epic';

export const newslettersEpic = combineEpics(
  fetchNewslettersEpic
)
