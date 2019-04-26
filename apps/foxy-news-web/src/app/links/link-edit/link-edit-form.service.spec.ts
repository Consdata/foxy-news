import { TestBed } from '@angular/core/testing';

import { LinkEditFormService } from './link-edit-form.service';

describe('LinkEditFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinkEditFormService = TestBed.get(LinkEditFormService);
    expect(service).toBeTruthy();
  });
});
