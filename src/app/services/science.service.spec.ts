import { TestBed } from '@angular/core/testing';

import { ScienceService } from './science.service';

describe('ScienceService', () => {
  let service: ScienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
