import {categories} from '@foxy-news/categories';
import {PendingLink} from '@foxy-news/links';
import {Box, CircularProgress} from '@material-ui/core';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {useHistory} from 'react-router';
import styled from 'styled-components';
import {AppState} from '../../../state/app-state';
import {CenteredPanel} from '../../ui-components/centered-panel';
import {addLinkToNewsletterAction} from '../state/add-link-to-newsletter/add-link-to-newsletter.action';
import {deleteLinkAction} from '../state/delete-link/delete-link.action';
import {editLinkAction} from '../state/edit-link/edit-link.action';
import {LinkCards} from './link-cards';
import {NewsletterCart} from './newsletter-cart';

const PendingLinksView = ({links, newsletter, onDelete, onAddToNewsletter, onEdit}: ViewProps) => {
  const history = useHistory();
  return <CenteredPanel>
    {!links && <CircularProgress size={50}/>}
    {links && <LinkCards links={links}
                         categories={categories}
                         onDelete={onDelete}
                         onAddToNewsletter={onAddToNewsletter}
                         onEdit={onEdit}/>}
    {newsletter?.links?.length > 0 && <NewsletterCart onClick={() => history.push('/links/newsletter')}/>}
  </CenteredPanel>;
};

interface ViewProps extends ConnectedProps<typeof connector> {
}

const connector = connect(
  (state: AppState) => ({
    links: sorted(state.links.links),
    newsletter: state.links.newsletter
  }),
  {
    onDelete: (link: PendingLink) => deleteLinkAction({link}),
    onAddToNewsletter: (link: PendingLink, newsletter: string) => addLinkToNewsletterAction({link, newsletter}),
    onEdit: (link: PendingLink) => editLinkAction({link}),
  }
);

export const PendingLinks = connector(PendingLinksView);

function sorted(array: PendingLink[]): PendingLink[] {
  if (array) {
    const sorted = [...array];
    sorted.sort((a, b) => b.votes - a.votes);
    return sorted;
  } else {
    return array;
  }
}
