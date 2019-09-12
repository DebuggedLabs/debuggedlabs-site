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
  getTotalNumPodcasts(): number {
    return POSTS.length;
  }

  /**
   * Get ten posts from most recent to least, starting from the setNumber parameter
   * @param setNumber the post number to start from
   */
  getTenPosts(setNumber: number): TextPost[] {
    return POSTS.slice(setNumber * 10, setNumber * 10 + 10);
  }
}  

