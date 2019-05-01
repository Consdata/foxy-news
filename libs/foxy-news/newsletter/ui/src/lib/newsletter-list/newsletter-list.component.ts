import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'fxy-newsletter-list',
  template: `
    <div><fxy-button></fxy-button></div>
    <div>newsletter-list works!</div>
  `,
  styleUrls: ['./newsletter-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
