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
  getTotalNumPodcasts(): number {
    return PODCASTS.length;
  }

  /**
   * Get ten podcasts from most recent to least, starting from the setNumber parameter
   * @param setNumber the podcast number to start from
   */
  getTenPodcastPosts(setNumber: number): PodcastPost[] {
    return PODCASTS.slice(setNumber * 10, setNumber * 10 + 10);
   }
}  
