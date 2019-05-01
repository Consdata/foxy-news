import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fxy-button',
  template: `
    <p>fxy-button works!</p>
  `,
  styleUrls: ['./fxy-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FxyButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
