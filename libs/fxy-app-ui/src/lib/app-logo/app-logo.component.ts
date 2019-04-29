import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'fxy-app-logo',
  template: `
    Foxy News
  `,
  styleUrls: ['./app-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLogoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
