export class Tag {

  readonly text: string;

  constructor(data: Partial<Tag> = {}) {
    this.text = data.text || 'n/a';
  }

}
