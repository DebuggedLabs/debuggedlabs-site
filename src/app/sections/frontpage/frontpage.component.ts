import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PageDetailsService, PageId } from 'src/app/services/page-details.service';
import { WidthService } from 'src/app/services/width.service';
import { FrontPageService } from 'src/app/services/frontpage.service';
import { Post } from 'src/app/definitions/interfaces';
import { PodcastPost } from 'src/app/definitions/podcast';
import { TextPost } from 'src/app/definitions/textpost';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})

export class FrontpageComponent implements OnInit {

  public topPosts: Post[];
  public podcastSubSectionPosts: PodcastPost[];
  public technologySectionPosts: Post[];
  public scienceSectionPosts: Post[];

  constructor(private titleService: Title,
              private router: ActivatedRoute,
              private pageDetailService: PageDetailsService,
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
      this.topPosts = topPosts;
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
  }
}
