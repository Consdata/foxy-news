import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'fxy-navbar',
  template: `
    <mat-toolbar>
      <div class="navbar-row">
        <fxy-app-logo></fxy-app-logo>
        <fxy-navbar-item [routerLink]="''">Newsletter</fxy-navbar-item>
        <div class="fill"></div>
        <fxy-navbar-user></fxy-navbar-user>
      </div>
    </mat-toolbar>
  `,
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
