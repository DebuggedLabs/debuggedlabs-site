import { Injectable } from '@angular/core';
import { Post } from '../definitions/interfaces';
import { POSTS } from '../mocks/mock-posts';
import { PodcastPost } from '../definitions/podcast';
import { PODCASTS } from '../mocks/mock-podcasts';

@Injectable({
  providedIn: 'root'
})
export class FrontPageService {

  constructor() { }

  /**
   * Get the top posts, which includes the feature post for the front page
   */
  getTopPosts(): Post[] {
    return POSTS;
  }

  /**
   * Get podcast section posts for the front page
   */
  getPodcastSectionPosts(): PodcastPost[] {
    return PODCASTS;
  }

  /**
   * Get technology section posts for the front page
   */
  getTechnologySectionPosts(): Post[] {
    return POSTS.slice(0, 3);
  }
}
