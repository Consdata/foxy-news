import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TagUiModule} from '@foxy-news/tag/ui';

@NgModule({
  imports: [
    CommonModule,
    TagUiModule
  ],
  exports: [
    TagUiModule
  ]
})
export class TagFeatureModule {
}
