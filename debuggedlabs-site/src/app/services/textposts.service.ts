import { Injectable } from '@angular/core';
import { TextPost } from '../definitions/textpost';
import { POSTS } from '../testing/mock-posts'; // change this when backend is worked out


@Injectable({
  providedIn: 'root'
})
export class TextpostsService {

  constructor() { }

  /**
   * Get total number of text posts
   */
  getTotalPostsCount(): number {
    return POSTS.length;
  }

  /**
   * Get ten posts from most recent to least, starting from the setNumber parameter
   * @param setNumber the post number to start from
   * @param offset the offset to begin with
   */
  getTenPosts(setNumber: number, offset: number = 0): TextPost[] {
    return POSTS.slice((setNumber * 10) + 10, setNumber * 10 + 10);
  }

  /**
   * Get the most recent 10 non-featuured podcast posts
   */
  getTenRecentNonFeaturedPosts(): TextPost[] {
    return this.getTenPosts(0, 1);
  }

  /**
   * Get the featured text post
   */
  getFeaturedPost(): TextPost {
    return POSTS[0];
  }
}  

