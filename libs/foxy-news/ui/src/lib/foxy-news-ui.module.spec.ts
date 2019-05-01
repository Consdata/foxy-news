import { async, TestBed } from '@angular/core/testing';
import { FoxyNewsUiModule } from './foxy-news-ui.module';

describe('FoxyNewsUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FoxyNewsUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FoxyNewsUiModule).toBeDefined();
  });
});
