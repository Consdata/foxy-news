import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fxy-link-edit',
  template: `
    <p>
      link-edit works!
    </p>
  `,
  styleUrls: ['./link-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
