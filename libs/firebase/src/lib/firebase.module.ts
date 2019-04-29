import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ]
})
export class FirebaseModule {
  static forRoot(environment): ModuleWithProviders[] {
    return [
      {
        ngModule: FirebaseModule,
        providers: [
          {provide: FirestoreSettingsToken, useValue: {}},
        ]
      },
      AngularFireModule.initializeApp(environment.firebase)
    ]
  }
}
