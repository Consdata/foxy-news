import {PendingLink} from '@foxy-news/links';
import {NewsletterDraft} from './newsletter-draft';

export interface LinksState {
    links: PendingLink[];
    newsletter: NewsletterDraft;
}
