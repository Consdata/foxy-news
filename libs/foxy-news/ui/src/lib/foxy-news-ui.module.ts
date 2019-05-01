import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AuthUiModule } from '@foxy-news/shared/auth/ui';
import { AppLogoComponent } from './app-logo/app-logo.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatToolbarModule, AuthUiModule],
  declarations: [
    AppLogoComponent,
    NavbarComponent,
    NavbarItemComponent,
    NavbarUserComponent
  ],
  exports: [NavbarComponent]
})
export class FoxyNewsUiModule {}
