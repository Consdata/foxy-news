import { async, TestBed } from '@angular/core/testing';
import { NewsletterNewUiModule } from './newsletter-new-ui.module';

describe('NewsletterNewFirebaseModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NewsletterNewUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NewsletterNewUiModule).toBeDefined();
  });
});
