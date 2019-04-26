import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {LinkHref} from '../link-href';

@Component({
  selector: 'fxy-link-hrefs',
  template: `
    <fxy-link-href *ngFor="let href of hrefs" [href]="href"></fxy-link-href>
  `,
  styleUrls: ['./link-hrefs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkHrefsComponent {

  @Input() hrefs: LinkHref[];

}
