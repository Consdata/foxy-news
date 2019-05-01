import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fxy-navbar-item',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./navbar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarItemComponent {}
