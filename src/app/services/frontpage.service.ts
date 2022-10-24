import { Injectable } from '@angular/core';
import { Post } from '../definitions/interfaces';
import { POSTS } from '../mocks/mock-posts';
import { PodcastPost } from '../definitions/podcast';
import { PODCASTS } from '../mocks/mock-podcasts';
import { PostRetrievalService } from './post-retrieval.service';
import { PageId } from '../definitions/types';

@Injectable({
  providedIn: 'root'
})
export class FrontPageService {

  constructor(private postRetrievalService: PostRetrievalService) { }

  /**
   * Get the top posts, which includes the feature post for the front page
   */
  getTopPosts(callBackFunction: (posts:Post[]) => void) {
    this.postRetrievalService.getTopPostsForPage(PageId.Home, posts => callBackFunction(posts));
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
    this.postRetrievalService.getTopPostsForTopic("technology", 3, posts => callBackFunction(posts));
  }

  /**
   * Get science section posts for the front page
   */
  getScienceSectionPosts(callBackFunction: (posts: Post[]) => void) {
    this.postRetrievalService.getTopPostsForTopic("science", 3, posts => callBackFunction(posts));
  }
}
