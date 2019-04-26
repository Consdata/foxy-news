import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagChipsWithAutocompleteComponent } from './tag-chips-with-autocomplete.component';

describe('TagChipsWithAutocmpleteComponent', () => {
  let component: TagChipsWithAutocompleteComponent;
  let fixture: ComponentFixture<TagChipsWithAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagChipsWithAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagChipsWithAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
