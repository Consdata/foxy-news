import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Link} from '../link';

@Component({
  selector: 'fxy-link-list',
  template: `
    <div *ngFor="let link of links">
      <mat-card>
        <mat-card-content>
          <div class="header">
            <div class="title">{{link.title}}</div>
            <fxy-tags [tags]="link.tags"></fxy-tags>
          </div>
          <div class="summary" *ngIf="link.summary">
            {{link.summary}}
          </div>
          <fxy-link-hrefs [hrefs]="link.hrefs"></fxy-link-hrefs>
        </mat-card-content>
        <mat-card-actions *ngIf="editable">
          <button mat-button (click)="editClicked(link)">Edytuj</button>
          <button mat-button color="warn" (click)="removeClicked(link)">Usuń</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styleUrls: ['./link-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkListComponent {

  @Input() links: Link[];
  @Input() editable: boolean = true;
  @Output() remove = new EventEmitter<Link>();
  @Output() edit = new EventEmitter<Link>();

  removeClicked(link: Link) {
    this.remove.emit(link);
  }

  editClicked(link: Link) {
    this.edit.emit(link);
  }

}
