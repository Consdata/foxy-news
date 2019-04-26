import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkFilterComponent } from './link-filter.component';

describe('LinkFilterComponent', () => {
  let component: LinkFilterComponent;
  let fixture: ComponentFixture<LinkFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
