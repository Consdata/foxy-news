import {createReducer} from '@reduxjs/toolkit';
import {newslettersFetched} from './fetch-newsletters/newsletters-fetched';
import {newslettersFetchedReducer} from './fetch-newsletters/newsletters-fetched.reducer';
import {newslettersStateInitial} from './newsletters-state';
import {NewslettersState} from './newsletters-state-initial';

export const newslettersReducer = createReducer<NewslettersState>(
  newslettersStateInitial,
  builder => builder
    .addCase(newslettersFetched, newslettersFetchedReducer)
)
