import {createReducer} from '@reduxjs/toolkit';
import {linksFetched} from './fetch-links/links-fetched';
import {linksFetchedReducer} from './fetch-links/links-fetched.reducer';
import {LinksState} from './links-state';
import {linksStateInitial} from './links-state-initial';

export const linksReducer = createReducer<LinksState>(
    linksStateInitial,
    builder => builder
        .addCase(linksFetched, linksFetchedReducer)
)