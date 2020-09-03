export interface PublishNewsletterRequest {
  newsletter: 'current';
  title: string;
  description: string;
  field: string;
  team: string;
  date: string;
}
