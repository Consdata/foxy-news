import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'foxy-news-parent',
  template: `
    <p>
      parent works!
    </p>
    <foxy-news-nested></foxy-news-nested>
  `,
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
