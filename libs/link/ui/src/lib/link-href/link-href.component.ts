import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {LinkHref} from '@foxy-news/link/api';

@Component({
  selector: 'fxy-link-href',
  template: `
    <div class="summary" matLine>{{href.summary}}</div>
    <div class="href" matLine>
      <a [href]="href.url">{{href.url}}</a>
    </div>
  `,
  styleUrls: ['./link-href.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkHrefComponent {

  @Input() href: LinkHref;

}
