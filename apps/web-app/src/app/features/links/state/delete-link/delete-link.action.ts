import {createAction} from '@reduxjs/toolkit';
import {DeleteLinkPayload} from './delete-link.payload';

export const deleteLinkAction = createAction<DeleteLinkPayload>('deleteLinkAction');
