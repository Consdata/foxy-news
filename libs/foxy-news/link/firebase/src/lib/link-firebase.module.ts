import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FirebaseModule } from '@foxy-news/shared/firebase';
import { LinkService } from '@foxy-news/foxy-news/link/api';
import { FirebaseLinkService } from './firebase-link.service';

@NgModule({
  imports: [CommonModule, FirebaseModule]
})
export class LinkFirebaseModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LinkFirebaseModule,
      providers: [{ provide: LinkService, useClass: FirebaseLinkService }]
    };
  }
}
