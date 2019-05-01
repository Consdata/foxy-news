import { async, TestBed } from '@angular/core/testing';
import { TagFirebaseModule } from './tag-firebase.module';

describe('TagFirebaseModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TagFirebaseModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TagFirebaseModule).toBeDefined();
  });
});
