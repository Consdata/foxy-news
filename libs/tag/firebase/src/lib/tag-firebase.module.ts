import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FirebaseModule} from '@foxy-news/firebase';
import {TagService} from '@foxy-news/tag/api';
import {FirebaseTagService} from './firebase-tag.service';

@NgModule({
  imports: [
    CommonModule,
    FirebaseModule
  ]
})
export class TagFirebaseModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TagFirebaseModule,
      providers: [
        {provide: TagService, useClass: FirebaseTagService},
      ]
    }
  }
}
