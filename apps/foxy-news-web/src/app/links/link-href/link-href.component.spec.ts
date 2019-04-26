import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkHrefComponent } from './link-href.component';

describe('LinkHrefComponent', () => {
  let component: LinkHrefComponent;
  let fixture: ComponentFixture<LinkHrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkHrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkHrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
