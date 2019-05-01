import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatLineModule
} from '@angular/material';
import { TagUiModule } from '@foxy-news/foxy-news/tag/ui';
import { LinkEditComponent } from './link-edit/link-edit.component';
import { LinkFilterComponent } from './link-filter/link-filter.component';
import { LinkHrefComponent } from './link-href/link-href.component';
import { LinkHrefsComponent } from './link-hrefs/link-hrefs.component';
import { LinkListComponent } from './link-list/link-list.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatLineModule,
    TagUiModule
  ],
  declarations: [
    LinkEditComponent,
    LinkFilterComponent,
    LinkHrefComponent,
    LinkHrefsComponent,
    LinkListComponent,
    LinksComponent
  ],
  exports: [LinksComponent]
})
export class LinkUiModule {}
