import { async, TestBed } from '@angular/core/testing';
import { NewsletterNewFeatureModule } from './newsletter-new-feature.module';

describe('NewsletterNewFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NewsletterNewFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NewsletterNewFeatureModule).toBeDefined();
  });
});
