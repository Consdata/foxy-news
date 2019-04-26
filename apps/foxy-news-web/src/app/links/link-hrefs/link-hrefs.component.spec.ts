import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkHrefsComponent } from './link-hrefs.component';

describe('LinkHrefsComponent', () => {
  let component: LinkHrefsComponent;
  let fixture: ComponentFixture<LinkHrefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkHrefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkHrefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
