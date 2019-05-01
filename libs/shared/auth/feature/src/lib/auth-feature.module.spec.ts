import { async, TestBed } from '@angular/core/testing';
import { AuthFeatureModule } from './auth-feature.module';

describe('AuthFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthFeatureModule).toBeDefined();
  });
});
