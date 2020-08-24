import {createAction} from '@reduxjs/toolkit';
import {EditLinkPayload} from './edit-link.payload';

export const editLinkAction = createAction<EditLinkPayload>('editLinkAction');
