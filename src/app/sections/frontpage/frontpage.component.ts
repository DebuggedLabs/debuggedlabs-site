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
      console.log("Top posts are: ");
      console.log(topPosts);
      if (topPosts != null && topPosts != undefined)
      {
        this.topPosts = topPosts;
        console.log("Sorted top posts: ")
        console.log(this.topPosts);
      }
    });

    this.frontpageService.getTechnologySectionPosts(technologyPosts => {
      this.technologySectionPosts = technologyPosts;
    });

    this.frontpageService.getPodcastSectionPosts(podcastPosts => {
      this.podcastSubSectionPosts = podcastPosts;
    });

    this.frontpageService.getScienceSectionPosts(sciencePosts => {
      this.scienceSectionPosts = sciencePosts;
    });

    // scroll to the top of the page on reload
    this.scrollTopService.setScrollTop();
  }

  /**
   * Return whether top posts are loaded
   * @returns boolean indicating whether posts are loaded
   */
  public arePostsLoaded(): boolean {
    return this.topPosts != null && this.topPosts != undefined;
  }
}
