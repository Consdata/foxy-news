import {Draft} from '@reduxjs/toolkit';
import {NewslettersState} from '../newsletters-state-initial';
import {newslettersFetched} from './newsletters-fetched';

export const newslettersFetchedReducer = (state: Draft<NewslettersState>, action: ReturnType<typeof newslettersFetched>) => {
  state.newsletters = action.payload.newsletters;
};
