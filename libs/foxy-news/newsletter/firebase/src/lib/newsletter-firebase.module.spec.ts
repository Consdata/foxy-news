import { async, TestBed } from '@angular/core/testing';
import { NewsletterFirebaseModule } from './newsletter-firebase.module';

describe('NewsletterFirebaseModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NewsletterFirebaseModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NewsletterFirebaseModule).toBeDefined();
  });
});
