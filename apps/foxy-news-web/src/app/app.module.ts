import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import {MatToolbarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {environment} from '../environments/environment';
import {AppComponent} from './app.component';
import {AuthenticatedGuard} from './auth/authenticated-guard.service';
import {LoginButtonComponent} from './auth/login-button/login-button.component';
import {LogoutButtonComponent} from './auth/logout-button/logout-button.component';
import {CreateNewsletterComponent} from './create-newsletter/create-newsletter/create-newsletter.component';
import {AppLogoComponent} from './layout/app-logo/app-logo.component';
import {NavbarItemComponent} from './layout/navbar-item/navbar-item.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {LinkEditComponent} from './links/link-edit/link-edit.component';
import {LinkListItemComponent} from './links/link-list-item/link-list-item.component';
import {LinkListComponent} from './links/link-list/link-list.component';
import {NewsletterDetailsComponent} from './newsletters/newsletter-details/newsletter-details.component';
import {NewsletterListItemComponent} from './newsletters/newsletter-list-item/newsletter-list-item.component';
import {NewsletterListComponent} from './newsletters/newsletter-list/newsletter-list.component';
import {TagComponent} from './tags/tag/tag.component';
import {TagsComponent} from './tags/tags/tags.component';
import { NavbarUserComponent } from './layout/navbar-user/navbar-user.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, NewsletterListComponent, NewsletterListItemComponent, NewsletterDetailsComponent, LinkListComponent, LinkListItemComponent, LinkEditComponent, LoginButtonComponent, LogoutButtonComponent, CreateNewsletterComponent, TagComponent, TagsComponent, NavbarItemComponent, AppLogoComponent, NavbarUserComponent],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: NewsletterListComponent
        },
        {
          path: 'links',
          component: LinkListComponent,
          canActivate: [
            AuthenticatedGuard
          ]
        },
        {
          path: ':uuid',
          component: NewsletterDetailsComponent
        }
      ],
      {
        initialNavigation: 'enabled'
      }
    ),
    BrowserAnimationsModule
  ],
  providers: [{provide: FirestoreSettingsToken, useValue: {}}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
