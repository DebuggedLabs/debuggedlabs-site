import { Injectable } from '@angular/core';
import { Post } from '../definitions/interfaces';
import { POSTS } from '../mocks/mock-posts';

@Injectable({
  providedIn: 'root'
})
export class ScienceService {

  constructor() { }

  /**
  * Get total number of science posts
  * @param serviceFunction The service function to pass the result to (as a parameter)
  */
  getTotalSciencePostsCount(serviceFunction: (number) => void) {
    serviceFunction(POSTS.length);
  }

  /**
   * Get ten science posts from most recent to least, starting from the setNumber parameter
   * @param setNumber the post number to start from
   * @param offset the offset to begin with
   * @param numberOfPosts number of posts to get
   * @param serviceFunction service function to pass the data to
   */
  getBatchOfSciencePosts(setNumber: number, offset: number = 0, numberOfPosts: number = 10, serviceFunction: (posts: Post[]) => void) {
    let frontPageOffset = setNumber == 1 ? 10 : (setNumber * numberOfPosts);
    serviceFunction(POSTS.slice(frontPageOffset + offset, frontPageOffset + numberOfPosts));
  }
}
