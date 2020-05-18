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

  // style-related fields
  public iconUrl: string;
  public backgroundColor: string;

  // structural fields
  public isShowingTopPosts: boolean;
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
      // get the page number from the URL
      this.getPageNumber(params);
    });

    // close hamburger menu
    this.showHamburgerService.updateShowHamburgerMenuStatus(false);

    // update page detail service
    this.pageDetailService.updateCurrentPageId(PageId.Technology);

    // fetch the podcasts
    this.getTechnologyPosts();

    // scroll to the top of the page on reload
    this.scrollTopService.setScrollTop();

    // log all our variables
    console.log("Page number: " + this.pageNumber);
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
   * Get technology posts
   */
  getTechnologyPosts() {
    var allPosts = this.technologyFetchService.getTenTechnologyPosts(this.pageNumber);

    // if showing featured posts, the first 4 posts are featured
    if (this.isShowingTopPosts) {
      this.topPosts = allPosts.slice(0, 4);
      this.rowPosts = allPosts.slice(4);
    }
    else {
      this.rowPosts = allPosts;
    }
  }

}

