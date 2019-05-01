import { async, TestBed } from '@angular/core/testing';
import { TagFeatureModule } from './tag-feature.module';

describe('TagFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TagFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TagFeatureModule).toBeDefined();
  });
});
