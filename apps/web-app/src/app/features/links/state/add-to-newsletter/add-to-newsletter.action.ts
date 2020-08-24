import {createAction} from '@reduxjs/toolkit';
import {AddToNewsletterPayload} from './add-to-newsletter.payload';

export const addToNewsletterAction = createAction<AddToNewsletterPayload>('addToNewsletterAction');
