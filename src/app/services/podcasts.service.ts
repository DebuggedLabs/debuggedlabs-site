import { Injectable } from '@angular/core';
import { PodcastPost } from '../definitions/podcast';
import { PODCASTS } from '../mocks/mock-podcasts'; // change this when backend is worked out

@Injectable({
  providedIn: 'root'
})
export class PodcastsService {

  constructor() { }

  /**
   * Get total number of podcast posts
   */
  getTotalPodcastsCount(serviceFunction: (number) => void) {
    serviceFunction(PODCASTS.length);
  }

  /**
   * Get ten podcasts posts from most recent to least, starting from the setNumber parameter
   * @param setNumber the post number to start from
   * @param offset the offset to begin with
   * @param numberOfPosts number of posts to get
   * @param serviceFunction service function to pass the data to
   */
  getBatchOfPodcastsPosts(setNumber: number, offset: number = 0, numberOfPosts: number = 7, serviceFunction: (posts: PodcastPost[]) => void) {
    let frontPageOffset = setNumber == 1 ? 7 : (setNumber * numberOfPosts);
    serviceFunction(PODCASTS.slice(frontPageOffset + offset, frontPageOffset + numberOfPosts));
  }
}
