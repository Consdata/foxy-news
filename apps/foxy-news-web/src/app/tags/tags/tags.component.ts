import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fxy-tags',
  template: `
    <p>
      tags works!
    </p>
  `,
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
