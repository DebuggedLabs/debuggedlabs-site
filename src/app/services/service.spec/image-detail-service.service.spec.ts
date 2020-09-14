import { TestBed } from '@angular/core/testing';

import { ImageDetailServiceService } from '../image-detail.service';

describe('ImageDetailServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageDetailServiceService = TestBed.get(ImageDetailServiceService);
    expect(service).toBeTruthy();
  });
});
