import {SelectionModel} from '@angular/cdk/collections';
import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Link} from '../../links/link';

@Component({
  selector: 'fxy-create-newsletter-pending-links',
  template: `
    <mat-table [dataSource]="dataSource">

      <ng-container matColumnDef="select">
        <mat-header-cell *cdkHeaderCellDef class="column-select">
          <mat-checkbox (change)="$event ? masterToggle() : null"
                        [checked]="selection.hasValue() && isAllSelected()"
                        [indeterminate]="selection.hasValue() && !isAllSelected()">
          </mat-checkbox>
        </mat-header-cell>
        <mat-cell *cdkCellDef="let row" class="column-select">
          <mat-checkbox (click)="$event.stopPropagation()"
                        (change)="$event ? selection.toggle(row) : null"
                        [checked]="selection.isSelected(row)">
          </mat-checkbox>
        </mat-cell>
      </ng-container>
      <ng-container cdkColumnDef="title">
        <mat-header-cell *cdkHeaderCellDef>Tytuł</mat-header-cell>
        <mat-cell *cdkCellDef="let row">
          <div>
            <div>{{row.title}}</div>
            <div><em>{{row.summary}}</em></div>
          </div>
        </mat-cell>
      </ng-container>
      <ng-container cdkColumnDef="links">
        <mat-header-cell *cdkHeaderCellDef>Linki</mat-header-cell>
        <mat-cell *cdkCellDef="let row">
          <div>
            <div *ngFor="let href of row.hrefs">
              <a [href]="href.url">{{href.summary}}</a>
            </div>
          </div>
        </mat-cell>
      </ng-container>
      <ng-container cdkColumnDef="tags">
        <mat-header-cell *cdkHeaderCellDef>Tagi</mat-header-cell>
        <mat-cell *cdkCellDef="let row">
          <fxy-tags [tags]="row.tags"></fxy-tags>
        </mat-cell>
      </ng-container>

      <mat-header-row *cdkHeaderRowDef="['select', 'title', 'links', 'tags']"></mat-header-row>
      <mat-row *cdkRowDef="let row; columns: ['select', 'title', 'links', 'tags']"></mat-row>

    </mat-table>
  `,
  styleUrls: ['./create-newsletter-pending-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateNewsletterPendingLinksComponent implements OnChanges {

  @Input() links: Link[] = [];
  selection: SelectionModel<Link>;
  dataSource: MatTableDataSource<Link>;

  constructor() {
    this.dataSource = new MatTableDataSource(this.links);
    this.selection = new SelectionModel<any>(true, []);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.links) {
      this.dataSource.data = this.links;
    }
  }

  isAllSelected() {
    return this.selection.selected.length == this.dataSource.data.length;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear()
    } else {
      this.selection.select(...this.dataSource.data);
    }
  }

  selected(): Link[] {
    return this.selection.selected;
  }

}
