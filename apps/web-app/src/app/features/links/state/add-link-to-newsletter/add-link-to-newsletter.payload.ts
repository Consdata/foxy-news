import {PendingLink} from '@foxy-news/links';

export interface AddLinkToNewsletterPayload {
  link: PendingLink;
  newsletter: string;
}
