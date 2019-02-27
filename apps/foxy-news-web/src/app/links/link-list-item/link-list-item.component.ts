import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fxy-link-list-item',
  template: `
    <p>
      link-list-item works!
    </p>
  `,
  styleUrls: ['./link-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
