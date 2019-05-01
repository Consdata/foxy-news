import { async, TestBed } from '@angular/core/testing';
import { SharedLibParentModule } from './shared-lib-parent.module';

describe('SharedLibParentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedLibParentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedLibParentModule).toBeDefined();
  });
});
