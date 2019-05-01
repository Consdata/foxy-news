import { Injectable } from '@angular/core';
import { Tag, TagService } from '@foxy-news/foxy-news/tag/api';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class FirebaseTagService implements TagService {
  private _tags: Tag[] = [
    new Tag({ text: 'jvm' }),
    new Tag({ text: 'security' }),
    new Tag({ text: 'frontend' }),
    new Tag({ text: 'db' }),
    new Tag({ text: 'misc' })
  ];
  private tags$ = new BehaviorSubject(this._tags);

  constructor() {}

  tags(): Observable<Tag[]> {
    return this.tags$;
  }
}
