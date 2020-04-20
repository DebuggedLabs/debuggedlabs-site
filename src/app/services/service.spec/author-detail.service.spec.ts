import { TestBed } from '@angular/core/testing';

import { AuthorDetailService } from '../author-detail.service';

describe('AuthorDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorDetailService = TestBed.get(AuthorDetailService);
    expect(service).toBeTruthy();
  });
});
