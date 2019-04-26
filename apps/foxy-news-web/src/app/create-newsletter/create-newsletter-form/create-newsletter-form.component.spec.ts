import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewsletterFormComponent } from './create-newsletter-form.component';

describe('CreateNewsletterFormComponent', () => {
  let component: CreateNewsletterFormComponent;
  let fixture: ComponentFixture<CreateNewsletterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewsletterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewsletterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
