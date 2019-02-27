import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterDetailsComponent } from './newsletter-details.component';

describe('NewsletterDetailsComponent', () => {
  let component: NewsletterDetailsComponent;
  let fixture: ComponentFixture<NewsletterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
