import {PendingLink} from '@foxy-news/links';

export interface NewsletterDraft {
  title?: string;
  description?: string;
  links?: PendingLink[];
  date?: string;
}
