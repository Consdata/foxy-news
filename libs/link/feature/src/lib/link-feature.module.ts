import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LinkApiModule} from '@foxy-news/link/api';
import {LinkUiModule} from '@foxy-news/link/ui';

@NgModule({
  imports: [
    CommonModule,
    LinkUiModule,
    LinkApiModule
  ]
})
export class LinkFeatureModule {
}
