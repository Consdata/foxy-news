import { async, TestBed } from '@angular/core/testing';
import { FxyUiKitModule } from './fxy-ui-kit.module';

describe('FxyUiKitModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FxyUiKitModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FxyUiKitModule).toBeDefined();
  });
});
