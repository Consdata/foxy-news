import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Tag } from '@foxy-news/tag/api';

@Component({
  selector: 'fxy-tags',
  template: `
    <mat-chip-list>
      <mat-chip *ngFor="let tag of tags">{{ tag.text }}</mat-chip>
    </mat-chip-list>
  `,
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsComponent {
  @Input() tags: Tag[];
}
