export class LinkHref {
  readonly summary: string;
  readonly url: string;

  constructor(data: Partial<LinkHref> = {}) {
    this.summary = data.summary || '';
    this.url = data.url || '';
  }
}
