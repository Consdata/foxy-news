import {createAction} from '@reduxjs/toolkit';
import {AddLinkToNewsletterPayload} from './add-link-to-newsletter.payload';

export const addLinkToNewsletterAction = createAction<AddLinkToNewsletterPayload>('addLinkToNewsletterAction');
