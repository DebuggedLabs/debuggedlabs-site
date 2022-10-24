import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostApiWrapper } from '../api-wrappers/post-api-wrapper';
import { Post } from '../definitions/interfaces';
import { TeamProfile } from '../definitions/teamProfile';
import { AuthorDetailService } from './author-detail.service';
import { ImageDetailService } from './image-detail.service';
import { PageId } from 'src/app/definitions/types';

@Injectable({
  providedIn: 'root'
})
export class PostRetrievalService {

  private postApiWrapper: PostApiWrapper;

  constructor(private http: HttpClient,
              private authorDetailService: AuthorDetailService,
              private imageDetailService: ImageDetailService) {
    this.postApiWrapper = new PostApiWrapper(http, authorDetailService, imageDetailService);
  }

  /**
   * Get single post from backend
   * @param postId id of the post to retrieve
   * @param callback callback to return the post to
   */
  getSinglePost(postId: string, callback: (Post) => void) {
    this.postApiWrapper.getSinglePost(postId, post => {
      callback(post);
    });
  }

  /**
   * Get all posts written by an author
   * @param authorProfile Profile of the author
   * @param callback callback to return the posts to
   */
  getPostsForAuthor(authorProfile: TeamProfile, callback: (posts: Post[]) => void) {
    this.postApiWrapper.getPostsForAuthor(authorProfile, authorPosts => {
      callback(authorPosts);
    });
  }

  /**
   * Get top posts for a certain page Id
   * @param pageId Id of the current page
   * @param callback callback to return the posts to
   */
  getTopPostsForPage(pageId: PageId, callback: (posts: Post[]) => void)  {
    this.postApiWrapper.getTopPostsForPage(pageId, topPostsForPage => {
      callback(topPostsForPage);
    })
  }

  /**
   * Get top posts for a certain topic
   * @param topic Topic to filter posts by
   * @param numberOfPosts Number of posts
   * @param callback callback to return the posts to
   */
  getTopPostsForTopic(topic: string, numberOfPosts: number, callback: (posts: Post[]) => void) {
    this.postApiWrapper.getTopPostsForTopic(topic, topPostsForTopic => {
      callback(topPostsForTopic.slice(0, numberOfPosts));
    })
  }
}
