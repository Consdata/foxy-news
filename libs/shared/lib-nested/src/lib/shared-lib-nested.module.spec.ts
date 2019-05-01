import { async, TestBed } from '@angular/core/testing';
import { SharedLibNestedModule } from './shared-lib-nested.module';

describe('SharedLibNestedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedLibNestedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedLibNestedModule).toBeDefined();
  });
});
