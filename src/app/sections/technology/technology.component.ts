import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PageDetailsService, PageId } from 'src/app/services/page-details.service';
import { WidthService } from 'src/app/services/width.service';
import { TechnologyService } from 'src/app/services/technology.service';
import { Post } from 'src/app/definitions/interfaces';
import { ScrollTopService } from 'src/app/services/scroll-top.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  // constants
  public NUMBER_OF_POSTS_PER_PAGE: number = 9;
  public totalNumberOfPages: number = 1;  // default set to 9 for purposes of division

  // style-related fields
  public iconUrl: string;
  public backgroundColor: string;

  // structural fields
  public isShowingTopPosts: boolean;
  public pageIndex: number;
  public pageNumber: number;

  // data fields
  public topPosts: Post[];       // list of top posts for the page
  public rowPosts: Post[];       // list of row (regular) posts for the page

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
    private technologyFetchService: TechnologyService,
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

      // get total number of posts in technology
      this.technologyFetchService.getTotalTechnologyPostsCount(totalNumberOfPosts => {
        let numPages = Math.ceil(totalNumberOfPosts/this.NUMBER_OF_POSTS_PER_PAGE);
        this.totalNumberOfPages = Math.max(1, numPages);
        console.log("total number of posts = " + totalNumberOfPosts + ", number of pages = " + numPages);

        // get the page number from the URL
        this.getPageIndex(params);
      });
    });

    // close hamburger menu
    this.showHamburgerService.updateShowHamburgerMenuStatus(false);

    // update page detail service
    this.pageDetailService.updateCurrentPageId(PageId.Technology);

    // fetch the technology posts
    this.getTechnologyPosts();

    // scroll to the top of the page on reload
    this.scrollTopService.setScrollTop();

    // log all our variables
    console.log("Page number: " + this.pageIndex);
    console.log("Showing featured podcast: ", this.isShowingTopPosts);
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
      this.router.navigate(['technology']);
    }

    // if not on first page of technology, then we're not showing a featured post
    this.isShowingTopPosts = this.pageIndex > 0 ? false : true;
  }

  /**
   * Get technology posts
   */
  getTechnologyPosts() {
    var allPosts = this.technologyFetchService.getBatchOfTechnologyPosts(this.pageIndex, 0, this.NUMBER_OF_POSTS_PER_PAGE);

    // if showing featured posts, the first 4 posts are featured and only have 2 rows
    if (this.isShowingTopPosts) {
      this.topPosts = allPosts.slice(0, 3);
      this.rowPosts = allPosts.slice(3, 9);
    }
    else {
      this.rowPosts = allPosts;
    }

    console.log(this.rowPosts);
  }

}

