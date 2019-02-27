import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fxy-create-newsletter',
  template: `
    <p>
      create-newsletter works!
    </p>
  `,
  styleUrls: ['./create-newsletter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateNewsletterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
