import { async, TestBed } from '@angular/core/testing';
import { UiKitModule } from './ui-kit.module';

describe('UiKitModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiKitModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiKitModule).toBeDefined();
  });
});
