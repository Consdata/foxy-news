import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FxyButtonComponent } from './fxy-button/fxy-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FxyButtonComponent
  ],
  exports: [
    FxyButtonComponent
  ]
})
export class UiKitModule {}
