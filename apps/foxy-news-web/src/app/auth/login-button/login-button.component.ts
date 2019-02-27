import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fxy-login-button',
  template: `
    login
  `,
  styleUrls: ['./login-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
