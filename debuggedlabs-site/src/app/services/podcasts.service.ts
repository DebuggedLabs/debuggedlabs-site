import { Injectable } from '@angular/core';
import { PodcastPost } from '../definitions/podcast';
import { PODCASTS } from '../testing/mock-podcasts'; // change this when backend is worked out

@Injectable({
  providedIn: 'root'
})
export class PodcastsService {

  constructor() { }

  /**
   * Get total number of podcast posts
   */
  getTotalPodcastsCount(): number {
    return PODCASTS.length;
  }

  /**
   * Get ten podcasts from most recent to least, starting from the setNumber parameter
   * @param setNumber the podcast number to start from
   * @param offset the offset to begin with
   */
  getTenPodcastPosts(setNumber: number, offset: number = 0): PodcastPost[] {
    return PODCASTS.slice((setNumber * 10) + offset, setNumber * 10 + 10);
   }

  /**
   * Get the most recent 10 non-featuured podcast posts
   */ 
  getTenRecentNonFeaturedPodcastPosts(): PodcastPost[] {
    return this.getTenPodcastPosts(0, 1);
  }

   /**
    * Get the featured podcast post
    */
   getFeaturedPodcast(): PodcastPost {
      return PODCASTS[0];
   }
}  
