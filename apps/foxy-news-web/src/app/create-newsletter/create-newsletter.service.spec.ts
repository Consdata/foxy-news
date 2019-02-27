import { TestBed } from '@angular/core/testing';

import { CreateNewsletterService } from './create-newsletter.service';

describe('CreateNewsletterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateNewsletterService = TestBed.get(CreateNewsletterService);
    expect(service).toBeTruthy();
  });
});
