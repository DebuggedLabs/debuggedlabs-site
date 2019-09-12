import { Component, OnInit, Input } from '@angular/core';
import { PodcastPost } from '../../definitions/podcast';
import { PodcastsService } from '../../services/podcasts.service';

@Component({
  selector: 'app-podcasts-list',
  templateUrl: './podcasts-list.component.html',
  styleUrls: ['./podcasts-list.component.css']
})
export class PodcastsListComponent implements OnInit {

  podcasts: PodcastPost[];
  @Input() podcastSetNumber: number;
  @Input() isFeaturedPostShown: boolean;

  /**
   * To display an array of podcasts as a list form
   * @param podcastFetchService the podcast fetching service to retrieve them from the backend
   * @param pageNumber the set number to start from. Setting the value to "N" retrieves podcasts (N * 10) to (N * 10) + 9 inclusive
   */
  constructor(private podcastFetchService: PodcastsService) {}

  ngOnInit() {
    this.getPodcasts();
  }

  /**
   * Retrieve the podcasts from the fetching service
   */
  getPodcasts(): void {
    const allTenPodcasts = this.podcastFetchService.getTenPodcastPosts(this.podcastSetNumber);

    // if we're not showing a featured podcast on the page, store the entire array
    if (!this.isFeaturedPostShown) {
      this.podcasts = allTenPodcasts;
    }

    // if we're showing a featured podcast on the page, only store from index 1 onwards
    else {
      this.podcasts = allTenPodcasts.slice(1); 
    }
  }
}
