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
  * @param serviceFunction The service function to pass the result to (as a parameter)
  */
  getTotalTechnologyPostsCount(serviceFunction: (number) => void) {
    serviceFunction(POSTS.length);
  }

  /**
   * Get ten technology posts from most recent to least, starting from the setNumber parameter
   * @param setNumber the post number to start from
   * @param offset the offset to begin with
   * @param numberOfPosts number of posts to get
   * @param serviceFunction service function to pass the data to
   */
  getBatchOfTechnologyPosts(setNumber: number, offset: number = 0, numberOfPosts: number = 10, serviceFunction: (posts: Post[]) => void) {
    let frontPageOffset = setNumber == 1 ? 10 : (setNumber * numberOfPosts);
    serviceFunction(POSTS.slice(frontPageOffset + offset, frontPageOffset + numberOfPosts));
  }
}
