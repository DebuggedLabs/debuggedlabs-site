import { TestBed } from '@angular/core/testing';

import { TextpostsService } from '../textposts.service';

describe('TextpostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextpostsService = TestBed.get(TextpostsService);
    expect(service).toBeTruthy();
  });
});
