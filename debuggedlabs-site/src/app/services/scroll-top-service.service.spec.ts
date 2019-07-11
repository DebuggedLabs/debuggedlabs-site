import { TestBed } from '@angular/core/testing';

import { ScrollTopServiceService } from './scroll-top-service.service';

describe('ScrollTopServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollTopServiceService = TestBed.get(ScrollTopServiceService);
    expect(service).toBeTruthy();
  });
});
