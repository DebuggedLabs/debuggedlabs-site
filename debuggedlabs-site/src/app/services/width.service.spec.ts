import { TestBed } from '@angular/core/testing';

import { WidthService } from './width.service';

describe('ShowHamburgerMenuServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidthService = TestBed.get(WidthService);
    expect(service).toBeTruthy();
  });
});
