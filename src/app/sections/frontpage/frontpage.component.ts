import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PageDetailsService } from 'src/app/services/page-details.service';
import { WidthService } from 'src/app/services/width.service';
import { FrontPageService } from 'src/app/services/frontpage.service';
import { Post } from 'src/app/definitions/interfaces';
import { PodcastPost } from 'src/app/definitions/podcast';
import { TextPost } from 'src/app/definitions/textpost';
import { PageId } from 'src/app/definitions/types';
import { ScrollTopService } from 'src/app/services/scroll-top.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})

export class FrontpageComponent implements OnInit {

  public topPosts: Post[] = null;
  public podcastSubSectionPosts: PodcastPost[];
  public technologySectionPosts: Post[];
  public scienceSectionPosts: Post[];

  constructor(private titleService: Title,
              private router: ActivatedRoute,
              private pageDetailService: PageDetailsService,
              private scrollTopService: ScrollTopService,
              private showHamburgerMenuService: WidthService,
              private frontpageService: FrontPageService) { }

  ngOnInit() {
    this.router.data
      .subscribe({
        next: (data: { title: string }) => {
          this.titleService.setTitle(data.title);
        },
        error: error => console.log(error)
      });

    // close hamburger menu
    this.showHamburgerMenuService.updateShowHamburgerMenuStatus(false);

    // update the current page Id
    this.pageDetailService.updateCurrentPageId(PageId.Home);
    this.pageDetailService.updateFrontPageShowNavBarStatus(false);

    // get the posts for the front page
    this.frontpageService.getTopPosts(topPosts => {
      if (topPosts != null && topPosts != undefined)
      {
        this.topPosts = topPosts;
      }
    });

    this.frontpageService.getTechnologySectionPosts(technologyPosts => {
      console.log("Top technology posts")
      console.log(technologyPosts)
      if (technologyPosts != null && technologyPosts != undefined) {
        this.technologySectionPosts = technologyPosts;
      }
    });

    this.frontpageService.getPodcastSectionPosts(podcastPosts => {
      if (podcastPosts != null && podcastPosts != undefined) {
        this.podcastSubSectionPosts = podcastPosts;
      }
    });

    this.frontpageService.getScienceSectionPosts(sciencePosts => {
      console.log("Top science posts")
      console.log(sciencePosts)
      if (sciencePosts != null && sciencePosts != undefined) {
        this.scienceSectionPosts = sciencePosts;
      }
    });

    // scroll to the top of the page on reload
    this.scrollTopService.setScrollTop();
  }

  /**
   * Return whether top posts are loaded
   * @returns boolean indicating whether posts are loaded
   */
  public areTopPostsLoaded(): boolean {
    return this.topPosts != null && this.topPosts != undefined;
  }

  /**
   * Return whether top technology posts are loaded
   * @returns boolean indicating whether posts are loaded
   */
  public areTechnologyPostsLoaded(): boolean {
    return this.technologySectionPosts != null && this.technologySectionPosts != undefined;
  }

  /**
   * Return whether top science posts are loaded
   * @returns boolean indicating whether posts are loaded
   */
  public areSciencePostsLoaded(): boolean {
    return this.scienceSectionPosts != null && this.scienceSectionPosts != undefined;
  }

  /**
   * Return whether top podcast posts are loaded
   * @returns boolean indicating whether posts are loaded
   */
  public arePodcastPostsLoaded(): boolean {
    return this.podcastSubSectionPosts != null && this.podcastSubSectionPosts != undefined;
  }
}
