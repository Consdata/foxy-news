import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule, MatSelectModule } from '@angular/material';
import { TagChipsWithAutocompleteComponent } from './tag-chips-with-autocmplete/tag-chips-with-autocomplete.component';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatSelectModule
  ],
  declarations: [TagsComponent, TagChipsWithAutocompleteComponent],
  exports: [TagsComponent, TagChipsWithAutocompleteComponent]
})
export class TagUiModule {}
