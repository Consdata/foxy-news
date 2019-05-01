import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginButtonComponent, LogoutButtonComponent],
  exports: [LoginButtonComponent, LogoutButtonComponent]
})
export class AuthUiModule {}
