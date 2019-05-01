import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'foxy-news-nested',
  template: `
    <p>
      nested works!
    </p>
  `,
  styleUrls: ['./nested.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NestedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
