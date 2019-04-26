import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Link} from '../../links/link';
import {LinkService} from '../../links/link.service';
import {CreateNewsletterFormData} from '../create-newsletter-form/create-newsletter-form-data';
import {CreateNewsletterFormComponent} from '../create-newsletter-form/create-newsletter-form.component';
import {CreateNewsletterPendingLinksComponent} from '../create-newsletter-pending-links/create-newsletter-pending-links.component';

@Component({
  selector: 'fxy-create-newsletter',
  template: `
    <mat-card>
      <fxy-create-newsletter-form (save)="save($event)">
      </fxy-create-newsletter-form>
    </mat-card>
    <fxy-create-newsletter-pending-links [links]="links$ | async">
    </fxy-create-newsletter-pending-links>
  `,
  styleUrls: ['./create-newsletter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateNewsletterComponent {

  links$: Observable<Link[]>;
  @ViewChild(CreateNewsletterPendingLinksComponent) links: CreateNewsletterPendingLinksComponent;
  @ViewChild(CreateNewsletterFormComponent) form: CreateNewsletterFormComponent;

  constructor(private linkService: LinkService) {
    this.links$ = linkService.pendingLinks();
  }

  save($event: CreateNewsletterFormData) {
    console.log($event);
  }

}
