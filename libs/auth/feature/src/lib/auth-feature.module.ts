import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AuthApiModule} from '@foxy-news/auth/api';
import {AuthUiModule} from '@foxy-news/auth/ui';

@NgModule({
  imports: [
    CommonModule,
    AuthUiModule,
    AuthApiModule
  ],
  exports: [
    AuthUiModule,
  ]
})
export class AuthFeatureModule {
}
