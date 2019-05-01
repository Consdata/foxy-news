import { async, TestBed } from '@angular/core/testing';
import { LinkApiModule } from './link-api.module';

describe('LinkApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LinkApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LinkApiModule).toBeDefined();
  });
});
