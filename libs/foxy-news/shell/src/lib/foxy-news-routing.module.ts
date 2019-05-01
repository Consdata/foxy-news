import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksComponent } from '@foxy-news/foxy-news/link/ui';
import { CreateNewsletterComponent } from '@foxy-news/foxy-news/newsletter-new/ui';
import {
  NewsletterDetailsComponent,
  NewsletterListComponent
} from '@foxy-news/foxy-news/newsletter/ui';
import { AuthenticatedGuard } from '@foxy-news/shared/auth/api';

const appRoutes: Routes = [
  {
    path: 'links',
    component: LinksComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'newsletter/new',
    component: CreateNewsletterComponent,
    canActivate: [AuthenticatedGuard]
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false,
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class FoxyNewsRoutingModule {}
