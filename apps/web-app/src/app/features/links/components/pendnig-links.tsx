import {categoriesTech} from '@foxy-news/categories';
import {PendingLink} from '@foxy-news/links';
import {CircularProgress} from '@material-ui/core';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {useHistory} from 'react-router';
import {AppState} from '../../../state/app-state';
import {sorted} from '../../../util/sorted';
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
                         categories={categoriesTech}
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
    links: sorted(state.links.links, (a, b) => b.votes - a.votes),
    newsletter: state.links.newsletter
  }),
  {
    onDelete: (link: PendingLink) => deleteLinkAction({link}),
    onAddToNewsletter: (link: PendingLink, newsletter: string) => addLinkToNewsletterAction({link, newsletter}),
    onEdit: (link: PendingLink) => editLinkAction({link}),
  }
);

export const PendingLinks = connector(PendingLinksView);
