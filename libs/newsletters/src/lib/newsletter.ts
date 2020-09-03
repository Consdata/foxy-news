import {NewsletterLink} from './newsletter-link';

export interface Newsletter {
  title?: string;
  description?: string;
  links?: NewsletterLink[];
  date: string;
}
