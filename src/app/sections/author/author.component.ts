import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Post } from 'src/app/definitions/interfaces';
import { TeamProfile } from 'src/app/definitions/teamProfile';
import { PageId } from 'src/app/definitions/types';
import { AuthorDetailService } from 'src/app/services/author-detail.service';
import { PageDetailsService } from 'src/app/services/page-details.service';
import { PostRetrievalService } from 'src/app/services/post-retrieval.service';
import { WidthService } from 'src/app/services/width.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  public iconUrl: string;
  public backgroundColor: string;
  public authorName: string;
  public authorProfile: TeamProfile;
  public isAuthorValid: boolean = false;
  public authorPosts: Post[] = [];

  constructor(private titleService: Title,
              private route: ActivatedRoute,
              private router: Router,
              private pageDetailService: PageDetailsService,
              private showHamburgerMenuService: WidthService,
              private authorDetailService: AuthorDetailService,
              private postRetrievalService: PostRetrievalService) { }

  ngOnInit() {
    // parse the query params
    this.route.paramMap.subscribe({
      next: params => {
        // get the author name from the url parameters
        this.getAuthorDetails(params);
      },
      error: error => console.log(error)
    });

    this.pageDetailService.updateCurrentPageId(PageId.Author);
    this.showHamburgerMenuService.updateShowHamburgerMenuStatus(false);
  }

  /**
   * Get the author name from the URL params
   * @param params Params from the URL route details
   */
  private getAuthorDetails(params: ParamMap) {
    let authorNameWithHyphen = params.get('authorname');
    let authorSplit: string[] = authorNameWithHyphen.split("-");
    let authorName = "";
    for (let i=0; i < authorSplit.length; i++) {
      authorName += authorSplit[i];
      if (i < authorSplit.length - 1)
      {
        authorName += " ";
      }
    }
    this.route.data
      .subscribe({
          next: (data: { title: string, iconUrl: string, backgroundColor: string }) => {
            this.authorDetailService.getSingleTeamProfileFromName(authorName.toLowerCase(), profile => {
              this.validateAndParseAuthorDetails(profile);
              this.titleService.setTitle(this.authorName + " | Debugged Labs");
              this.getAuthorsPosts();
            });
            this.iconUrl = data.iconUrl;
            this.backgroundColor = data.backgroundColor;
          },
          error: () => { console.log ("Error happened in subscribing to URL params"); }
      });
  }

  /**
   * Get author posts class based on mobile/web view
   * @returns class to use
   */
  getAuthorPostsClass(): string {
    if (this.showHamburgerMenuService.isMobileOrNarrowView()) {
      return "center-padding-mobile";
    }
    return "center-padding";
  }

  /**
   * Check if the author has no posts
   * @returns Boolean indicating if author has no posts
   */
  doesAuthorHaveNoContent(): boolean {
    return this.isAuthorValid && this.authorPosts != null && this.authorPosts.length == 0;
  }

  /**
   * Validate that the author name passed in the URL is indeed there
   * @param authorProfile author ID passed back from API
   */
  private validateAndParseAuthorDetails(authorProfile: TeamProfile) {
    if (authorProfile == null) {
      // navigate to the "page not found" page if author not found
      this.isAuthorValid = false;
      this.router.navigate(['page-not-found']);
    }
    else {
      this.isAuthorValid = true;
      this.authorProfile = authorProfile;
      this.authorName = authorProfile.name;
    }
  }

  /**
   * Get author's posts
   */
  private getAuthorsPosts() {
    if (this.authorProfile != null && this.authorProfile != undefined) {
      this.postRetrievalService.getPostsForAuthor(this.authorProfile, posts => {
        if (posts.length > 0) {
          this.authorPosts = posts;
          console.log(this.authorPosts);
        }
      });
    }
  }
}
