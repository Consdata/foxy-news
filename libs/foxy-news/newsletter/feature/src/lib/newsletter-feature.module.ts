import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewsletterApiModule } from '@foxy-news/foxy-news/newsletter/api';
import { NewsletterUiModule } from '@foxy-news/foxy-news/newsletter/ui';

@NgModule({
  imports: [CommonModule, NewsletterUiModule, NewsletterApiModule],
  exports: [NewsletterUiModule]
})
export class NewsletterFeatureModule {}
