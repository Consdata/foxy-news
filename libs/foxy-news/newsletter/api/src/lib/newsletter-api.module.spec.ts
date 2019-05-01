import { async, TestBed } from '@angular/core/testing';
import { NewsletterApiModule } from './newsletter-api.module';

describe('NewsletterApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NewsletterApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NewsletterApiModule).toBeDefined();
  });
});
