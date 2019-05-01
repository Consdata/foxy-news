import { async, TestBed } from '@angular/core/testing';
import { TagUiModule } from './tag-ui.module';

describe('TagUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TagUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TagUiModule).toBeDefined();
  });
});
