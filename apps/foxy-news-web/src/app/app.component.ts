import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'foxy-news-root',
  template: `
    <div style="text-align:center">
      <h1>Welcome to {{ title }}!</h1>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'foxy-news-web';
}
