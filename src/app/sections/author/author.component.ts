import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TeamProfile } from 'src/app/definitions/teamProfile';
import { AuthorDetailService } from 'src/app/services/author-detail.service';
import { PageDetailsService, PageId } from 'src/app/services/page-details.service';
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

  constructor(private titleService: Title,
              private route: ActivatedRoute,
              private router: Router,
              private pageDetailService: PageDetailsService,
              private showHamnburgerMenuService: WidthService,
              private authorDetailService: AuthorDetailService) { }

  ngOnInit() {
    // parse the query params
    this.route.paramMap.subscribe(params => {
      // get the author name from the url parameters
      this.getAuthorDetails(params);
    });

    this.pageDetailService.updateCurrentPageId(PageId.Author);
    this.showHamnburgerMenuService.updateShowHamburgerMenuStatus(false);
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
      .subscribe((data: { title: string, iconUrl: string, backgroundColor: string }) => {
        this.authorDetailService.getSingleTeamProfileFromName(authorName.toLowerCase(), profile => {
          this.validateAndParseAuthorDetails(profile);
          this.titleService.setTitle(this.authorName + " | Debugged Labs");
        });
        this.iconUrl = data.iconUrl;
        this.backgroundColor = data.backgroundColor;
      });


  }

  /**
   * Validate that the author name passed in the URL is indeed there
   * @param authorId author ID passed back from API
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
}
