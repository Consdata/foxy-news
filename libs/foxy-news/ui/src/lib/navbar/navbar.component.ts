import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'fxy-navbar',
  template: `
    <mat-toolbar>
      <div class="navbar-row">
        <fxy-logo></fxy-logo>
        <fxy-navbar-item [routerLink]="'/newsletter'"
          >Newsletter</fxy-navbar-item
        >
        <fxy-navbar-item [routerLink]="'/links'">Linki</fxy-navbar-item>
        <fxy-navbar-item [routerLink]="'/newsletter/new'"
          >Nowy newsletter</fxy-navbar-item
        >
        <div class="fill"></div>
        <fxy-navbar-user></fxy-navbar-user>
      </div>
    </mat-toolbar>
  `,
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
