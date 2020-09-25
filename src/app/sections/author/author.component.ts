import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
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

  constructor(private titleService: Title,
              private router: ActivatedRoute,
              private pageDetailService: PageDetailsService,
              private showHamnburgerMenuService: WidthService,
              private authorDetailService: AuthorDetailService) { }

  ngOnInit() {

    // parse the query params
    this.router.paramMap.subscribe(params => {
      // get the author name from the url parameters
      this.getAuthorName(params);
    });

    this.router.data
      .subscribe((data: { title: string, iconUrl: string, backgroundColor: string }) => {
        this.titleService.setTitle(this.authorName + " | Debugged Labs");
        this.iconUrl = data.iconUrl;
        this.backgroundColor = data.backgroundColor;
      });
    this.pageDetailService.updateCurrentPageId(PageId.Author);
    this.showHamnburgerMenuService.updateShowHamburgerMenuStatus(false);
  }

  getAuthorName(params: ParamMap) {
    let authorNameWithHyphen = params.get('authorname');
    let authorSplit: string[] = authorNameWithHyphen.split("-");
    this.authorName = "";
    for (let i=0; i < authorSplit.length; i++) {
      this.authorName += authorSplit[i];
      if (i < authorSplit.length - 1)
      {
        this.authorName += " ";
      }
    }
  }

}
