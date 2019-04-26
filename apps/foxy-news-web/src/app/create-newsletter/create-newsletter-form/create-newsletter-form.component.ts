import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateNewsletterFormData} from './create-newsletter-form-data';

@Component({
  selector: 'fxy-create-newsletter-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <mat-form-field class="title">
        <input matInput placeholder="Tytuł" formControlName="title">
      </mat-form-field>
      <mat-form-field class="date">
        <input matInput placeholder="Data" [matDatepicker]="picker" formControlName="date">
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
      <button mat-button type="submit">Zapisz</button>
    </form>
  `,
  styleUrls: ['./create-newsletter-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateNewsletterFormComponent implements OnInit {

  @Output() save = new EventEmitter<CreateNewsletterFormData>();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      date: [new Date(), Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      const value = this.form.value;
      this.save.emit({
        title: value.title,
        date: value.date
      });
    }
  }

}
