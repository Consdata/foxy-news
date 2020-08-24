import {Draft} from '@reduxjs/toolkit';
import {LinksState} from '../links-state';
import {linksFetched} from './links-fetched';

export const linksFetchedReducer = (state: Draft<LinksState>, action: ReturnType<typeof linksFetched>) => {
    state.links = action.payload.links;
};