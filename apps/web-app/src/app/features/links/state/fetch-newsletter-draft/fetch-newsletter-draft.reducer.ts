import {Draft} from '@reduxjs/toolkit';
import {LinksState} from '../links-state';
import {newsletterDraftFetched} from './newsletter-draft-fetched';

export const fetchNewsletterDraftReducer = (state: Draft<LinksState>, action: ReturnType<typeof newsletterDraftFetched>) => {
    state.newsletter = {
      links: action.payload.links
    };
};
