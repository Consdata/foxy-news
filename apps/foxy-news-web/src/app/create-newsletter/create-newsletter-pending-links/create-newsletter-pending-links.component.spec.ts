import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewsletterPendingLinksComponent } from './create-newsletter-pending-links.component';

describe('CreateNewsletterPendingLinksComponent', () => {
  let component: CreateNewsletterPendingLinksComponent;
  let fixture: ComponentFixture<CreateNewsletterPendingLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewsletterPendingLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewsletterPendingLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
