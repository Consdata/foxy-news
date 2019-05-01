import { async, TestBed } from '@angular/core/testing';
import { NewsletterNewApiModule } from './newsletter-new-api.module';

describe('NewsletterNewApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NewsletterNewApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NewsletterNewApiModule).toBeDefined();
  });
});
