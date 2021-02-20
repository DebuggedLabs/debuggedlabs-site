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

  // constants
  public NUMBER_OF_POSTS_PER_PAGE: number = 6;
  public totalNumberOfPages: number = 1;  // default set to 9 for purposes of division

  // style-related fields
  public iconUrl: string;
  public backgroundColor: string;

  // structural fields
  public isShowingTopPosts: boolean;
  public pageIndex: number;
  public pageNumber: number;

  // data fields
  public topPodcasts: PodcastPost[];    // the featured posts, if we're showing them
  public rowPosts: PodcastPost[];       // list of podcasts for the page

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

      // get total number of podcasts
      this.podcastFetchService.getTotalPodcastsCount(totalNumberOfPosts => {
        let numPages = Math.ceil(totalNumberOfPosts / this.NUMBER_OF_POSTS_PER_PAGE);
        this.totalNumberOfPages = Math.max(1, numPages);
        console.log("total number of posts = " + totalNumberOfPosts + ", number of pages = " + numPages);

        // get the page number from the URL
        this.getPageIndex(params);
      });
    });

    // close hamburger menu
    this.showHamburgerService.updateShowHamburgerMenuStatus(false);

    // update page detail service
    this.pageDetailService.updateCurrentPageId(PageId.Podcasts);

    // fetch the podcasts
    this.getPodcasts();

    // scroll to the top of the page on reload
    this.scrollTopService.setScrollTop();

    // log all our variables
    console.log("Showing featured podcast: ", this.isShowingTopPosts);
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
    this.isShowingTopPosts = this.pageNumber > 0 ? false : true;
  }

  /**
   * Retrieve the podcasts from the fetching service
   */
  getPodcasts() {
    this.podcastFetchService.getBatchOfPodcastsPosts(this.pageIndex, 0, this.NUMBER_OF_POSTS_PER_PAGE, podcastPosts => {

      // if showing featured posts, the first 3 posts are featured
      if (this.isShowingTopPosts) {
        this.topPodcasts = podcastPosts.slice(0, 3);
        this.rowPosts = podcastPosts.slice(3, this.NUMBER_OF_POSTS_PER_PAGE);
      }
      else {
        this.rowPosts = podcastPosts;
      }
    });
  }

  /**
   * Get the page index from the URL params
   * @param params ParamMap passed in from the ActivatedRoute
   */
  getPageIndex(params: ParamMap): void {
    const pageIndex = params.get('page') == null ? 1 : parseInt(params.get('page'));
    if (pageIndex > 0 && pageIndex <= this.totalNumberOfPages) {
      this.pageIndex = pageIndex - 1;
      this.pageNumber = this.pageIndex + 1;
    }
    else {
      this.pageIndex = 0;
      this.pageNumber = this.pageIndex + 1;
      this.router.navigate(['podcasts']);
    }

    // if not on first page of podcasts, then we're not showing a featured post
    this.isShowingTopPosts = this.pageIndex > 0 ? false : true;
  }

}
