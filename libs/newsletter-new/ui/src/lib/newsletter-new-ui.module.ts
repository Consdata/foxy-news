import {CdkTableModule} from '@angular/cdk/table';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import {TagUiModule} from '@foxy-news/tag/ui';
import {CreateNewsletterFormComponent} from './create-newsletter-form/create-newsletter-form.component';
import {CreateNewsletterPendingLinksComponent} from './create-newsletter-pending-links/create-newsletter-pending-links.component';
import {CreateNewsletterComponent} from './create-newsletter/create-newsletter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatTableModule,
    CdkTableModule,
    MatCardModule,
    TagUiModule
  ],
  declarations: [
    CreateNewsletterComponent,
    CreateNewsletterFormComponent,
    CreateNewsletterPendingLinksComponent
  ],
  exports: [
    CreateNewsletterComponent
  ]
})
export class NewsletterNewUiModule {
}
