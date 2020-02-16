import { Injectable } from '@angular/core';
import { Post } from '../definitions/interfaces';
import { POSTS } from '../testing/mock-posts';
import { PodcastPost } from '../definitions/podcast';
import { PODCASTS } from '../testing/mock-podcasts';

@Injectable({
  providedIn: 'root'
})
export class FrontPageService {

  constructor() { }

  /**
   * Get the featured post for the front page
   */
  getFeaturedPost(): Post {
    return POSTS[0];
  }

  /**
   * Get recent non-featured posts for the front page
   */
  getRecentNonFeaturedPosts(): Post[] {
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
    return POSTS;
  }
}
