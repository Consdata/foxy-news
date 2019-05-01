import { async, TestBed } from '@angular/core/testing';
import { NewsletterFeatureModule } from './newsletter-feature.module';

describe('NewsletterFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NewsletterFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NewsletterFeatureModule).toBeDefined();
  });
});
