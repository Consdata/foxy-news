import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewsletterNewApiModule } from '@foxy-news/newsletter-new/api';
import { NewsletterNewUiModule } from '@foxy-news/newsletter-new/ui';

@NgModule({
  imports: [CommonModule, NewsletterNewUiModule, NewsletterNewApiModule]
})
export class NewsletterNewFeatureModule {}
