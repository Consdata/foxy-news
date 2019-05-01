import { async, TestBed } from '@angular/core/testing';
import { LinkFeatureModule } from './link-feature.module';

describe('LinkFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LinkFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LinkFeatureModule).toBeDefined();
  });
});
