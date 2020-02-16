import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ScrollTopService } from '../../services/scroll-top.service';

import { PodcastPost } from '../../definitions/podcast';
import { PodcastsService } from '../../services/podcasts.service';
import { PageDetailsService, PageId } from 'src/app/services/page-details.service';
import { WidthService } from 'src/app/services/width.service';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {

  // style-related fields
  public iconUrl: string;
  public backgroundColor: string;

  // structural fields
  public isShowingFeaturedPost: boolean;
  public pageNumber: number;

  // data fields
  public featuredPodcast?: PodcastPost; // the featured post, if we're showing one
  public podcasts: PodcastPost[];       // list of podcasts for the page

  /**
   * To display the page of DebuggedLabs podcasts 
   * @param titleService to determine the title banner text
   * @param route ActivatedRoute to parse router information
   * @param router Router to navigate
   * @param scrollTopService to force the page to scroll to the top if reloaded
   * @param podcastFetchService to fetch podcasts to display on the page
   */
  constructor(private titleService: Title, 
              private route: ActivatedRoute,
              private router: Router,
              private scrollTopService: ScrollTopService,
              private podcastFetchService: PodcastsService,
              private pageDetailService: PageDetailsService,
              private showHamburgerService: WidthService) { }

  ngOnInit() {
    // get data from router-config
    this.route.data
      .subscribe((data: { title: string, iconUrl: string, backgroundColor: string }) => {
        this.titleService.setTitle(data.title);
        this.iconUrl = data.iconUrl;
        this.backgroundColor = data.backgroundColor;
      });
    
    // parse the query params
    this.route.paramMap.subscribe(params => {
      // get the page number from the URL
      this.getPageNumber(params);
    });

    // close hamburger menu
    this.showHamburgerService.updateShowHamburgerMenuStatus(false);

    // update page detail service
    this.pageDetailService.updateCurrentPageId(PageId.Podcasts);

    // fetch the podcasts
    this.getPodcasts();

    this.scrollTopService.setScrollTop();
    this.isShowingFeaturedPost = true; // need to change this to be modular

    // log all our variables
    console.log("Showing featured podcast: ", this.isShowingFeaturedPost);
  }

  /**
   * Get the page number from the URL params
   * @param params ParamMap passed in from the ActivatedRoute
   */
  getPageNumber(params: ParamMap): void {
    const pageNumber = params.get('page') == null ? 1 : parseInt(params.get('page'));
    if (pageNumber > 0) {
      this.pageNumber = pageNumber - 1;
    }
    else {
      this.pageNumber = 0;
      this.router.navigate(['podcasts']);
    }

    // if not on first page of podcasts, then we're not showing a featured post
    this.isShowingFeaturedPost = this.pageNumber > 1 ? false : true;
  }

  /**
   * Retrieve the podcasts from the fetching service
   */
  getPodcasts(): void {
    const allTenPodcasts = this.podcastFetchService.getTenPodcastPosts(this.pageNumber);

    // if we're not showing a featured podcast on the page, store the entire array
    if (!this.isShowingFeaturedPost) {
      this.podcasts = allTenPodcasts;
      this.featuredPodcast = undefined;
    }

    // if we're showing a featured podcast on the page, only store from index 1 onwards
    else {
      this.featuredPodcast = allTenPodcasts[0];
      this.podcasts = allTenPodcasts.slice(1);
    }
  }

}
