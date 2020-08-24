import {Box, CircularProgress} from '@material-ui/core';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import styled from 'styled-components';
import {AppState} from '../../../state/app-state';
import {categories} from '../state/category';
import {LinkCards} from './link-cards';

const View = styled(Box)`
    width: 800px;
    margin: 32px auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const PendingLinksView = ({links}: ViewProps) => <View>
  {!links && <CircularProgress size={50}/>}
  {links && <LinkCards links={links} categories={categories}/>}
</View>;

interface ViewProps extends ConnectedProps<typeof connector> {
}

const connector = connect(
  (state: AppState) => ({
    links: state.links.links
  }),
  {}
);

export const PendingLinks = connector(PendingLinksView);
