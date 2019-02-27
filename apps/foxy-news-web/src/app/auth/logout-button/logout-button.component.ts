import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fxy-logout-button',
  template: `
    logout
  `,
  styleUrls: ['./logout-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoutButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
