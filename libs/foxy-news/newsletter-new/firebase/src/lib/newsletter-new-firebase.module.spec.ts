import { async, TestBed } from '@angular/core/testing';
import { NewsletterNewFirebaseModule } from './newsletter-new-firebase.module';

describe('NewsletterNewFirebaseModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NewsletterNewFirebaseModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NewsletterNewFirebaseModule).toBeDefined();
  });
});
