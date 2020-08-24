import {createAction} from '@reduxjs/toolkit';
import {Link} from '../link';

export interface LinksFetchedPayload {
    links: Link[]
}

export const linksFetched = createAction<LinksFetchedPayload>('LinksFetched');
