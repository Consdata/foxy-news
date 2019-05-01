import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { LinkFeatureModule } from '@foxy-news/foxy-news/link/feature';
import { LinkFirebaseModule } from '@foxy-news/foxy-news/link/firebase';
import { NewsletterNewFeatureModule } from '@foxy-news/foxy-news/newsletter-new/feature';
import { NewsletterNewFirebaseModule } from '@foxy-news/foxy-news/newsletter-new/firebase';
import { NewsletterFeatureModule } from '@foxy-news/foxy-news/newsletter/feature';
import { NewsletterFirebaseModule } from '@foxy-news/foxy-news/newsletter/firebase';
import { TagFeatureModule } from '@foxy-news/foxy-news/tag/feature';
import { TagFirebaseModule } from '@foxy-news/foxy-news/tag/firebase';
import { FoxyNewsUiModule } from '@foxy-news/foxy-news/ui';
import { AuthFeatureModule } from '@foxy-news/shared/auth/feature';
import { AuthFirebaseModule } from '@foxy-news/shared/auth/firebase';
import { FirebaseModule } from '@foxy-news/shared/firebase';
import { FoxyNewsRoutingModule } from './foxy-news-routing.module';
import { FxyAppComponent } from './fxy-app.component';

@NgModule({
  imports: [
    CommonModule,
    FoxyNewsRoutingModule,
    AuthFeatureModule,
    FoxyNewsUiModule,
    AuthFeatureModule,
    TagFeatureModule,
    LinkFeatureModule,
    NewsletterFeatureModule,
    NewsletterNewFeatureModule,
    MatMomentDateModule
  ],
  declarations: [FxyAppComponent],
  exports: [FxyAppComponent]
})
export class FoxyNewsShellModule {
  static bootstrap: Array<Type<any> | any[]> = [FxyAppComponent];

  static forRoot(environment): ModuleWithProviders[] {
    return [
      {
        ngModule: FoxyNewsShellModule,
        providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pl-PL' }]
      },
      ...FirebaseModule.forRoot(environment),
      AuthFirebaseModule.forRoot(),
      TagFirebaseModule.forRoot(),
      LinkFirebaseModule.forRoot(),
      NewsletterNewFirebaseModule.forRoot(),
      NewsletterFirebaseModule.forRoot()
    ];
  }
}
