import { Injectable } from '@angular/core';
import { POSTS } from '../mocks/mock-posts';
import { Post } from '../definitions/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor() { }

  /**
   * Get total number of technology posts
   */
  getTotalTechnologyPostsCount(): number {
    return POSTS.length;
  }

  /**
   * Get ten podcasts from most recent to least, starting from the setNumber parameter
   * @param setNumber the post number to start from
   * @param offset the offset to begin with
   */
  getTenTechnologyPosts(setNumber: number, offset: number = 0): Post[] {
    return POSTS.slice((setNumber * 10) + offset, setNumber * 10 + 10);
  }

  /**
   * Get the most recent 10 non-featuured technology posts
   */
  getTenRecentNonFeaturedTechnologyPosts(): Post[] {
    return this.getTenTechnologyPosts(0, 1);
  }

  /**
   * Get the featured technology post
   */
  getFeaturedTechnologyPost(): Post {
    return POSTS[0];
  }
}
