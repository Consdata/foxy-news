import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from '@foxy-news/auth/api';
import { LinksComponent } from '@foxy-news/link/ui';
import { CreateNewsletterComponent } from '@foxy-news/newsletter-new/ui';
import {
  NewsletterDetailsComponent,
  NewsletterListComponent
} from '@foxy-news/newsletter/ui';

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
export class FxyAppRoutingModule {}
