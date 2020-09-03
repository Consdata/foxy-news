import {createAction} from '@reduxjs/toolkit';
import {PublishNewsletterPayload} from './publish-newsletter.payload';

export const publishNewsletterAction = createAction<PublishNewsletterPayload>('publishNewsletterAction');
