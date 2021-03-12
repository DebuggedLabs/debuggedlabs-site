import { TestBed } from '@angular/core/testing';

import { PostRetrievalService } from './post-retrieval.service';

describe('PostRetrievalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostRetrievalService = TestBed.get(PostRetrievalService);
    expect(service).toBeTruthy();
  });
});
