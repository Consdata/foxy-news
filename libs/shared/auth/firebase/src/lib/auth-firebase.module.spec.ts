import { async, TestBed } from '@angular/core/testing';
import { AuthFirebaseModule } from './auth-firebase.module';

describe('AuthFirebaseModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthFirebaseModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthFirebaseModule).toBeDefined();
  });
});
