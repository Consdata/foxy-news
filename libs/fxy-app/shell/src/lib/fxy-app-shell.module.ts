import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import {MAT_DATE_LOCALE} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {AuthFeatureModule} from '@foxy-news/auth/feature';
import {AuthFirebaseModule} from '@foxy-news/auth/firebase';
import {FirebaseModule} from '@foxy-news/firebase';
import {FxyAppUiModule} from '@foxy-news/fxy-app/ui';
import {LinkFeatureModule} from '@foxy-news/link/feature';
import {LinkFirebaseModule} from '@foxy-news/link/firebase';
import {NewsletterNewFeatureModule} from '@foxy-news/newsletter-new/feature';
import {NewsletterNewFirebaseModule} from '@foxy-news/newsletter-new/firebase';
import {NewsletterFeatureModule} from '@foxy-news/newsletter/feature';
import {NewsletterFirebaseModule} from '@foxy-news/newsletter/firebase';
import {TagFeatureModule} from '@foxy-news/tag/feature';
import {TagFirebaseModule} from '@foxy-news/tag/firebase';
import {UiKitModule} from '@foxy-news/ui/kit';
import {FxyAppRoutingModule} from './fxy-app-routing.module';
import {FxyAppComponent} from './fxy-app.component';

@NgModule({
  imports: [
    CommonModule,
    FxyAppRoutingModule,
    AuthFeatureModule,
    FxyAppUiModule,
    AuthFeatureModule,
    TagFeatureModule,
    LinkFeatureModule,
    NewsletterFeatureModule,
    NewsletterNewFeatureModule,
    MatMomentDateModule,
    UiKitModule
  ],
  declarations: [
    FxyAppComponent
  ],
  exports: [
    FxyAppComponent
  ]
})
export class FxyAppShellModule {
  static bootstrap: Array<Type<any> | any[]> = [FxyAppComponent];

  static forRoot(environment): ModuleWithProviders[] {
    return [
      {
        ngModule: FxyAppShellModule,
        providers: [
          {provide: MAT_DATE_LOCALE, useValue: 'pl-PL'},
        ]
      },
      ...FirebaseModule.forRoot(environment),
      AuthFirebaseModule.forRoot(),
      TagFirebaseModule.forRoot(),
      LinkFirebaseModule.forRoot(),
      NewsletterNewFirebaseModule.forRoot(),
      NewsletterFirebaseModule.forRoot(),
    ]
  }
}
