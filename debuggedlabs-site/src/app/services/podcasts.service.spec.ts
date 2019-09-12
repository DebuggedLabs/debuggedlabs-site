import { TestBed } from '@angular/core/testing';

import { PodcastsService } from './podcasts.service';

describe('PodcastsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PodcastsService = TestBed.get(PodcastsService);
    expect(service).toBeTruthy();
  });
});
