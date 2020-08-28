import {createReducer} from '@reduxjs/toolkit';
import {linksFetched} from './fetch-links/links-fetched';
import {linksFetchedReducer} from './fetch-links/links-fetched.reducer';
import {fetchNewsletterDraftReducer} from './fetch-newsletter-draft/fetch-newsletter-draft.reducer';
import {newsletterDraftFetched} from './fetch-newsletter-draft/newsletter-draft-fetched';
import {LinksState} from './links-state';
import {linksStateInitial} from './links-state-initial';

export const linksReducer = createReducer<LinksState>(
  linksStateInitial,
  builder => builder
    .addCase(linksFetched, linksFetchedReducer)
    .addCase(newsletterDraftFetched, fetchNewsletterDraftReducer)
)
