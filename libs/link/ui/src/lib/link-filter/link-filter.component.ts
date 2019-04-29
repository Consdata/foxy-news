import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {LinkFilter} from './link-filter';

@Component({
  selector: 'fxy-link-filter',
  template: `
    <button *ngFor="let filter of filters"
            mat-button
            (click)="select.emit(filter.type)"
            [class.active]="active === filter.type"
            [color]="active === filter.type ? 'accent' : undefined">
      {{filter.label}}
    </button>
  `,
  styleUrls: ['./link-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkFilterComponent {

  readonly filters = [
    {label: 'Oczekujące', type: LinkFilter.pending},
    {label: 'Archiwalne', type: LinkFilter.published},
    {label: 'Odrzucone', type: LinkFilter.rejected}
  ];
  @Input() active: LinkFilter;
  @Output() select = new EventEmitter<LinkFilter>();

}
