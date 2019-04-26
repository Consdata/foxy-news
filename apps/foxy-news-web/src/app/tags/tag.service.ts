import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Tag} from './tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private _tags: Tag[] = [
    new Tag({text: 'jvm'}),
    new Tag({text: 'security'}),
    new Tag({text: 'frontend'}),
    new Tag({text: 'db'}),
    new Tag({text: 'misc'}),
  ];
  private tags$ = new BehaviorSubject(this._tags);

  constructor() { }

  tags() {
    return this.tags$;
  }

}
