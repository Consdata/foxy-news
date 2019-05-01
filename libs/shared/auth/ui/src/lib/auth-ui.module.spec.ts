import { async, TestBed } from '@angular/core/testing';
import { AuthUiModule } from './auth-ui.module';

describe('AuthUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthUiModule).toBeDefined();
  });
});
