import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fxy-newsletter-list',
  template: `
    <p>
      newsletter-list works!
    </p>
  `,
  styleUrls: ['./newsletter-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
