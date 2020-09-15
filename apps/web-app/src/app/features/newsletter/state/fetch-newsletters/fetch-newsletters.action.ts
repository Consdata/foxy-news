import {createAction} from '@reduxjs/toolkit';
import {FetchNewslettersPayload} from './fetch-newsletters.payload';

export const fetchNewslettersAction = createAction<FetchNewslettersPayload>('fetchNewsletters');
