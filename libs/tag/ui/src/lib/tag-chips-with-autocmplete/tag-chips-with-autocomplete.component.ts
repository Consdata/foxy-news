import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Tag, TagService} from '@foxy-news/tag/api';
import {Observable} from 'rxjs';

@Component({
  selector: 'fxy-tag-chips-with-autocomplete',
  template: `
    <mat-form-field>
      <mat-select placeholder="Tagi" multiple [formControl]="control">
        <mat-option *ngFor="let tag of tags$ | async" [value]="tag.text">{{tag.text}}</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styleUrls: ['./tag-chips-with-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagChipsWithAutocompleteComponent implements OnInit {

  @Input() control: FormControl;
  tags$: Observable<Tag[]>;

  constructor(private service: TagService) {
  }

  ngOnInit(): void {
    this.tags$ = this.service.tags();
  }

}
