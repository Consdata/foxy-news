import {Box, CircularProgress} from '@material-ui/core';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {useHistory} from 'react-router';
import styled from 'styled-components';
import {AppState} from '../../../state/app-state';
import {addLinkToNewsletterAction} from '../state/add-link-to-newsletter/add-link-to-newsletter.action';
import {categories} from '../state/category';
import {deleteLinkAction} from '../state/delete-link/delete-link.action';
import {editLinkAction} from '../state/edit-link/edit-link.action';
import {Link} from '../state/link';
import {LinkCards} from './link-cards';
import {NewsletterCart} from './newsletter-cart';

const View = styled(Box)`
    width: 800px;
    margin: 32px auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const PendingLinksView = ({links, newsletter, onDelete, onAddToNewsletter, onEdit}: ViewProps) => {
  const history = useHistory();
  return <View>
    {!links && <CircularProgress size={50}/>}
    {links && <LinkCards links={links}
                         categories={categories}
                         onDelete={onDelete}
                         onAddToNewsletter={onAddToNewsletter}
                         onEdit={onEdit}/>}
    {newsletter?.links?.length > 0 && <NewsletterCart onClick={() => history.push('/links/newsletter')} />}
  </View>;
};

interface ViewProps extends ConnectedProps<typeof connector> {
}

const connector = connect(
  (state: AppState) => ({
    links: sorted(state.links.links),
    newsletter: state.links.newsletter
  }),
  {
    onDelete: (link: Link) => deleteLinkAction({link}),
    onAddToNewsletter: (link: Link, newsletter: string) => addLinkToNewsletterAction({link, newsletter}),
    onEdit: (link: Link) => editLinkAction({link}),
  }
);

export const PendingLinks = connector(PendingLinksView);

function sorted(array: Link[]): Link[] {
  if (array) {
    const sorted = [...array];
    sorted.sort((a, b) => b.votes - a.votes);
    return sorted;
  } else {
    return array;
  }
}
