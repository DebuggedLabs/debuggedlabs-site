import { TestBed } from '@angular/core/testing';

import { FrontPageService } from '../frontpage.service';

describe('FrontpageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrontPageService = TestBed.get(FrontPageService);
    expect(service).toBeTruthy();
  });
});
