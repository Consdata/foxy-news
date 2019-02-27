import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fxy-newsletter-details',
  template: `
    <p>
      newsletter-details works!
    </p>
  `,
  styleUrls: ['./newsletter-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
