import { async, TestBed } from '@angular/core/testing';
import { LinkFirebaseModule } from './link-firebase.module';

describe('LinkFirebaseModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LinkFirebaseModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LinkFirebaseModule).toBeDefined();
  });
});
