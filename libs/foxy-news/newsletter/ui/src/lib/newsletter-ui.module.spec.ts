import { async, TestBed } from '@angular/core/testing';
import { NewsletterUiModule } from './newsletter-ui.module';

describe('NewsletterUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NewsletterUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NewsletterUiModule).toBeDefined();
  });
});
