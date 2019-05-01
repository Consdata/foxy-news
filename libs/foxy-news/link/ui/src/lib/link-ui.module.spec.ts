import { async, TestBed } from '@angular/core/testing';
import { LinkUiModule } from './link-ui.module';

describe('LinkUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LinkUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LinkUiModule).toBeDefined();
  });
});
