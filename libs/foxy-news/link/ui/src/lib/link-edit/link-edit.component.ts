import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Link } from '@foxy-news/foxy-news/link/api';
import { Tag, TagService } from '@foxy-news/foxy-news/tag/api';
import { Observable } from 'rxjs';
import { LinkEditFormService } from './link-edit-form.service';

@Component({
  selector: 'fxy-link-edit',
  template: `
    <!-- suppress JSUnusedGlobalSymbols -->
    <form (ngSubmit)="submit()" [formGroup]="form.formGroup">
      <div class="columns">
        <div class="left">
          <mat-form-field>
            <input matInput placeholder="Tytuł" formControlName="title" />
          </mat-form-field>
          <mat-form-field>
            <textarea
              matInput
              placeholder="Opis"
              formControlName="summary"
            ></textarea>
          </mat-form-field>
          <fxy-tag-chips-with-autocomplete [control]="form.control('tags')">
          </fxy-tag-chips-with-autocomplete>
        </div>
        <div class="right" formArrayName="hrefs">
          <div
            *ngFor="let _ of form.hrefs.controls; let i = index"
            class="href-panel"
          >
            <div [formGroupName]="'' + i">
              <mat-form-field>
                <input matInput placeholder="Tytuł" formControlName="summary" />
              </mat-form-field>
              <mat-form-field>
                <input matInput placeholder="URL" formControlName="url" />
              </mat-form-field>
            </div>
            <div>
              <a
                mat-button
                *ngIf="form.canDeleteHref()"
                (click)="removeHref(i)"
              >
                <mat-icon color="warn">remove_circle</mat-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="actions">
        <button type="submit" mat-button>Zapisz</button>
        <a mat-button (click)="addHref()">Dodaj link</a>
        <a mat-button (click)="resignClicked()" color="warn">Zrezygnuj</a>
      </div>
    </form>
  `,
  styleUrls: ['./link-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LinkEditFormService]
})
export class LinkEditComponent implements OnInit {
  @Input() initial: Link;
  @Output() save = this.form.saved;
  @Output() resign = new EventEmitter();
  tags$: Observable<Tag[]>;

  constructor(
    public form: LinkEditFormService,
    private tagService: TagService
  ) {}

  ngOnInit(): void {
    this.tags$ = this.tagService.tags();
    this.form.init(this.initial);
  }

  submit() {
    this.form.submit();
  }

  addHref() {
    this.form.addEmptyHref();
  }

  removeHref(index: number) {
    this.form.removeHref(index);
  }

  resignClicked() {
    this.resign.emit();
  }
}
