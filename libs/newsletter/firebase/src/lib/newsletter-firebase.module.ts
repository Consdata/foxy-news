import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FirebaseModule } from '@foxy-news/firebase';

@NgModule({
  imports: [CommonModule, FirebaseModule]
})
export class NewsletterFirebaseModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NewsletterFirebaseModule,
      providers: []
    };
  }
}
