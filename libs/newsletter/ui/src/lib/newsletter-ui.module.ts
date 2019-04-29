import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NewsletterDetailsComponent} from './newsletter-details/newsletter-details.component';
import {NewsletterListItemComponent} from './newsletter-list-item/newsletter-list-item.component';
import {NewsletterListComponent} from './newsletter-list/newsletter-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NewsletterListComponent,
    NewsletterListItemComponent,
    NewsletterDetailsComponent
  ],
  exports: [
    NewsletterListComponent,
    NewsletterDetailsComponent
  ]
})
export class NewsletterUiModule {
}
