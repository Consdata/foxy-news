import {Injectable} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Link, LinkHref, LinkState} from '@foxy-news/link/api';
import {Tag} from '@foxy-news/tag/api';
import {Subject} from 'rxjs';

@Injectable()
export class LinkEditFormService {

  formGroup: FormGroup;
  saved: Subject<Link> = new Subject<Link>();
  hrefs: FormArray;
  private initial: Link;

  constructor(private formBuilder: FormBuilder) {
  }

  static emptyHref = () => new LinkHref();

  static emptyLink = () => new Link({
    hrefs: [
      LinkEditFormService.emptyHref()
    ],
    tags: []
  });

  canDeleteHref(): boolean {
    return this.hrefs.controls.length > 1;
  }

  init(initial: Link = LinkEditFormService.emptyLink()) {
    this.initial = initial;
    this.formGroup = this.formBuilder.group({
      id: initial.id,
      title: [initial.title, [Validators.required]],
      summary: [initial.summary, []],
      tags: [initial.tags.map(tag => tag.text), [Validators.required]],
      hrefs: this.formBuilder.array(
        initial.hrefs.map(href => this.mapHrefToFormGroup(href))
      )
    });
    this.hrefs = this.formGroup.get('hrefs') as FormArray;
  }

  submit() {
    if (this.formGroup.valid) {
      this.saved.next(this.mapToLink(this.formGroup.value))
    }
  }

  addEmptyHref() {
    this.hrefs.push(this.mapHrefToFormGroup(LinkEditFormService.emptyHref()));
  }

  removeHref(index: number) {
    this.hrefs.removeAt(index);
  }

  control(path: Array<string | number> | string): FormControl {
    return this.formGroup.get(path) as FormControl;
  }

  private mapHrefToFormGroup(href: LinkHref): FormGroup {
    return this.formBuilder.group({
      summary: [href.summary, []],
      url: [href.url, [Validators.required]]
    });
  }

  private mapToLink(value: any): Link {
    return new Link({
      id: value.id,
      title: value.title,
      summary: value.summary,
      state: LinkState.pending,
      tags: value.tags.map(tag => new Tag({text: tag})),
      hrefs: value.hrefs.map(href => new LinkHref({summary: href.summary, url: href.url}))
    });
  }
}
