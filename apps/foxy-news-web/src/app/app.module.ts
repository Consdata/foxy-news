import {CdkTableModule} from '@angular/cdk/table';
import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MAT_DATE_LOCALE,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {environment} from '../environments/environment';
import {AppComponent} from './app.component';
import {AuthenticatedGuard} from './auth/authenticated-guard.service';
import {LoginButtonComponent} from './auth/login-button/login-button.component';
import {LogoutButtonComponent} from './auth/logout-button/logout-button.component';
import {CreateNewsletterPendingLinksComponent} from './create-newsletter/create-newsletter-pending-links/create-newsletter-pending-links.component';
import {CreateNewsletterComponent} from './create-newsletter/create-newsletter/create-newsletter.component';
import {AppLogoComponent} from './layout/app-logo/app-logo.component';
import {NavbarItemComponent} from './layout/navbar-item/navbar-item.component';
import {NavbarUserComponent} from './layout/navbar-user/navbar-user.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {LinkEditComponent} from './links/link-edit/link-edit.component';
import {LinkFilterComponent} from './links/link-filter/link-filter.component';
import {LinkHrefComponent} from './links/link-href/link-href.component';
import {LinkHrefsComponent} from './links/link-hrefs/link-hrefs.component';
import {LinkListComponent} from './links/link-list/link-list.component';
import {LinksComponent} from './links/links/links.component';
import {NewsletterDetailsComponent} from './newsletters/newsletter-details/newsletter-details.component';
import {NewsletterListItemComponent} from './newsletters/newsletter-list-item/newsletter-list-item.component';
import {NewsletterListComponent} from './newsletters/newsletter-list/newsletter-list.component';
import {TagChipsWithAutocompleteComponent} from './tags/tag-chips-with-autocmplete/tag-chips-with-autocomplete.component';
import {TagsComponent} from './tags/tags/tags.component';
import { CreateNewsletterFormComponent } from './create-newsletter/create-newsletter-form/create-newsletter-form.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, NewsletterListComponent, NewsletterListItemComponent, NewsletterDetailsComponent, LinkListComponent, LinkEditComponent, LoginButtonComponent, LogoutButtonComponent, TagsComponent, NavbarItemComponent, AppLogoComponent, NavbarUserComponent, LinksComponent, LinkHrefsComponent, LinkHrefComponent, TagChipsWithAutocompleteComponent, CreateNewsletterComponent, LinkFilterComponent, CreateNewsletterPendingLinksComponent, CreateNewsletterFormComponent],
  imports: [
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTableModule,
    MatSelectModule,
    CdkTableModule,
    MatIconModule,
    MatAutocompleteModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {
          path: 'links',
          component: LinksComponent,
          canActivate: [
            AuthenticatedGuard
          ]
        },
        {
          path: 'newsletter/new',
          component: CreateNewsletterComponent,
          canActivate: [
            AuthenticatedGuard
          ]
        },
        {
          path: 'newsletter',
          component: NewsletterListComponent
        },
        {
          path: 'newsletter/:uuid',
          component: NewsletterDetailsComponent
        },
        {
          path: '',
          pathMatch: 'full',
          redirectTo: '/newsletter'
        }
      ],
      {
        initialNavigation: 'enabled'
      }
    ),
    BrowserAnimationsModule
  ],
  providers: [
    {provide: FirestoreSettingsToken, useValue: {}},
    {provide: MAT_DATE_LOCALE, useValue: 'pl-PL'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
