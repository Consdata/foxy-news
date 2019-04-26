import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Link} from '../link';
import {LinkFilter} from '../link-filter/link-filter';
import {LinkService} from '../link.service';

@Component({
  selector: 'fxy-links',
  template: `
    <mat-card>
      <button *ngIf="!addLinkVisible"
              mat-button
              (click)="addLinkVisible = true">
        Dodaj link
      </button>
      <fxy-link-edit *ngIf="addLinkVisible"
                     (save)="save($event)"
                     (resign)="resign()"
                     [initial]="editLink">
      </fxy-link-edit>
    </mat-card>
    <fxy-link-filter [active]="activeFilter"
                     (select)="changeFilter($event)">
    </fxy-link-filter>
    <fxy-link-list [editable]="isEditable()"
                   [links]="links | async"
                   (remove)="remove($event)"
                   (edit)="edit($event)">
    </fxy-link-list>
  `,
  styleUrls: ['./links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinksComponent {

  links: Observable<Link[]>;
  addLinkVisible = false;
  editLink: Link;
  activeFilter: LinkFilter = LinkFilter.pending;

  constructor(private linkService: LinkService) {
    this.changeFilter(LinkFilter.pending);
  }

  save(link: Link) {
    this.linkService.save(link);
    this.resetEditForm();
  }

  remove(link: Link) {
    this.linkService.reject(link);
  }

  resign() {
    this.resetEditForm();
  }

  edit(link: Link) {
    this.editLink = link;
    this.addLinkVisible = true;
  }

  changeFilter(filter: LinkFilter) {
    this.activeFilter = filter;
    switch (this.activeFilter) {
      case LinkFilter.pending:
        this.links = this.linkService.pendingLinks();
        break;
      case LinkFilter.rejected:
        this.links = this.linkService.rejectedLinks();
        break;
      case LinkFilter.published:
        this.links = this.linkService.publishedLinks();
        break;
    }
  }

  isEditable() {
    return this.activeFilter === LinkFilter.pending;
  }

  private resetEditForm() {
    this.editLink = undefined;
    this.addLinkVisible = false;
  }

}
