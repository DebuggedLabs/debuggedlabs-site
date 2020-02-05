import { TestBed } from '@angular/core/testing';

import { ShowHamburgerMenuServiceService } from './show-hamburger-menu-service.service';

describe('ShowHamburgerMenuServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowHamburgerMenuServiceService = TestBed.get(ShowHamburgerMenuServiceService);
    expect(service).toBeTruthy();
  });
});
