import { async, TestBed } from '@angular/core/testing';
import { FoxyNewsShellModule } from './foxy-news-shell.module';

describe('FoxyNewsShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FoxyNewsShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FoxyNewsShellModule).toBeDefined();
  });
});
