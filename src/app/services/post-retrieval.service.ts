import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostApiWrapper } from '../api-wrappers/post-api-wrapper';
import { AuthorDetailService } from './author-detail.service';
import { ImageDetailService } from './image-detail.service';

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
      console.log("Here is the post: ");
      console.log(post);
      callback(post);
    });
  }
}
