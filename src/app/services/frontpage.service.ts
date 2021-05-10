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
  getTopPosts(callBackFunction: (posts:Post[]) => void) {
    callBackFunction(POSTS);
  }

  /**
   * Get podcast section posts for the front page
   */
  getPodcastSectionPosts(callBackFunction: (posts) => void) {
    callBackFunction(PODCASTS);
  }

  /**
   * Get technology section posts for the front page
   */
  getTechnologySectionPosts(callBackFunction: (posts: Post[]) => void) {
    callBackFunction(POSTS.slice(0, 3));
  }

  /**
   * Get science section posts for the front page
   */
  getScienceSectionPosts(callBackFunction: (posts: Post[]) => void) {
    callBackFunction(POSTS.slice(0,3));
  }
}
