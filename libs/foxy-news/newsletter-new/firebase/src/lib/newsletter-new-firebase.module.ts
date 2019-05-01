import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FirebaseModule } from '@foxy-news/shared/firebase';

@NgModule({
  imports: [CommonModule, FirebaseModule]
})
export class NewsletterNewFirebaseModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NewsletterNewFirebaseModule,
      providers: []
    };
  }
}
