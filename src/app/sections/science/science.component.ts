import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Post } from 'src/app/definitions/interfaces';
import { PageId } from 'src/app/definitions/types';
import { PageDetailsService } from 'src/app/services/page-details.service';
import { ScienceService } from 'src/app/services/science.service';
import { ScrollTopService } from 'src/app/services/scroll-top.service';
import { WidthService } from 'src/app/services/width.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
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

  constructor(private titleService: Title,
    private route: ActivatedRoute,
    private router: Router,
    private scrollTopService: ScrollTopService,
    private scienceFetchService: ScienceService,
    private pageDetailService: PageDetailsService,
    private showHamburgerService: WidthService) { }

  ngOnInit(): void {
    // get data from router-config
    this.route.data
      .subscribe({
        next: (data: { title: string, iconUrl: string, backgroundColor: string }) => {
          this.titleService.setTitle(data.title);
          this.iconUrl = data.iconUrl;
          this.backgroundColor = data.backgroundColor;
        },
        error: error => console.log(error)
      });

    // parse the query params
    this.route.paramMap.subscribe({
      next: params => {

        // get total number of posts in science
        this.scienceFetchService.getTotalSciencePostsCount(totalNumberOfPosts => {
          let numPages = Math.ceil(totalNumberOfPosts / this.NUMBER_OF_POSTS_PER_PAGE);
          this.totalNumberOfPages = Math.max(1, numPages);
          console.log("total number of posts = " + totalNumberOfPosts + ", number of pages = " + numPages);

          // get the page number from the URL
          this.getPageIndex(params);
        });
      },
      error: error => console.log(error)
    });

    // close hamburger menu
    this.showHamburgerService.updateShowHamburgerMenuStatus(false);

    // update page detail service
    this.pageDetailService.updateCurrentPageId(PageId.Science);

    // fetch the science posts
    this.getSciencePosts();

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
      this.router.navigate(['science']);
    }

    // if not on first page of science, then we're not showing a featured post
    this.isShowingTopPosts = this.pageIndex > 0 ? false : true;
  }

  /**
   * Get science posts
   */
  getSciencePosts() {
    var allPosts = this.scienceFetchService.getBatchOfSciencePosts(this.pageIndex, 0, this.NUMBER_OF_POSTS_PER_PAGE, sciencePosts => {

      // if showing featured posts, the first 3 posts are featured and only have 2 rows
      if (this.isShowingTopPosts) {
        this.topPosts = sciencePosts.slice(0, 3);
        this.rowPosts = sciencePosts.slice(3, this.NUMBER_OF_POSTS_PER_PAGE);
      }
      else {
        this.rowPosts = sciencePosts;
      }
    });
  }

}
