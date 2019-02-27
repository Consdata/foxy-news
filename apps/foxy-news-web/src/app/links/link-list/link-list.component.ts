import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fxy-link-list',
  template: `
    <fxy-link-edit></fxy-link-edit>
  `,
  styleUrls: ['./link-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
