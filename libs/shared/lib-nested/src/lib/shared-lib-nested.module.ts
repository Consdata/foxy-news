import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedComponent } from './nested/nested.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NestedComponent],
  exports: [NestedComponent]
})
export class SharedLibNestedModule {}
