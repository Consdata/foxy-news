import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fxy-tag',
  template: `
    <p>
      tag works!
    </p>
  `,
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
