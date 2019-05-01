import { Tag } from '@foxy-news/foxy-news/tag/api';
import { LinkHref } from './link-href';
import { LinkState } from './link-state';

export class Link {
  readonly id?: string;
  readonly title: string;
  readonly summary: string;
  readonly tags: Tag[];
  readonly hrefs: LinkHref[];
  readonly state: LinkState;

  constructor(data: Partial<Link> = {}) {
    this.id = data.id || '';
    this.title = data.title || '';
    this.summary = data.summary || '';
    this.tags = data.tags || [];
    this.hrefs = data.hrefs || [];
    this.state = data.state || LinkState.pending;
  }
}
