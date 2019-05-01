import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedLibNestedModule } from '@foxy-news/shared/lib-nested';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  imports: [CommonModule, SharedLibNestedModule],
  declarations: [ParentComponent],
  exports: [ParentComponent]
})
export class SharedLibParentModule {
}
