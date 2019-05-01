import { async, TestBed } from '@angular/core/testing';
import { TagApiModule } from './tag-api.module';

describe('TagApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TagApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TagApiModule).toBeDefined();
  });
});
