import { TestBed } from '@angular/core/testing';

import { ShowHamburgerMenuService } from './show-hamburger-menu-service.service';

describe('ShowHamburgerMenuServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowHamburgerMenuService = TestBed.get(ShowHamburgerMenuService);
    expect(service).toBeTruthy();
  });
});
