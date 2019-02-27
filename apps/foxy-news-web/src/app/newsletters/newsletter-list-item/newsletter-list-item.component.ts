import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fxy-newsletter-list-item',
  template: `
    <p>
      newsletter-list-item works!
    </p>
  `,
  styleUrls: ['./newsletter-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
