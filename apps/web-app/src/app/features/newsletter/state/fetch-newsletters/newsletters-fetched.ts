import {Newsletter} from '@foxy-news/newsletters';
import {createAction} from '@reduxjs/toolkit';

export interface NewslettersFetchedPayload {
  newsletters: Newsletter[]
}

export const newslettersFetched = createAction<NewslettersFetchedPayload>('newslettersFetched');
