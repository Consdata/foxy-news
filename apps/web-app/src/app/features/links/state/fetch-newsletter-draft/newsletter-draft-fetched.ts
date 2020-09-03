import {PendingLink} from '@foxy-news/links';
import {createAction} from '@reduxjs/toolkit';

export interface LinksFetchedPayload {
  links: PendingLink[]
}

export const newsletterDraftFetched = createAction<LinksFetchedPayload>('NewsletterDraftFetched');
