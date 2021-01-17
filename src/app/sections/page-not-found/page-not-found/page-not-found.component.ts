import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorDetailService } from 'src/app/services/author-detail.service';
import { PageDetailsService, PageId } from 'src/app/services/page-details.service';
import { ScrollTopService } from 'src/app/services/scroll-top.service';
import { WidthService } from 'src/app/services/width.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  public iconUrl: string;

  constructor(private titleService: Title,
              private route: ActivatedRoute,
              private scrollTopService: ScrollTopService,
              private pageDetailService: PageDetailsService,
              private showHamburgerMenuService: WidthService) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { title: string, iconUrl: string, backgroundColor: string }) => {
        this.titleService.setTitle(data.title);
        this.iconUrl = data.iconUrl;
      });

    // close hamburger menu
    this.showHamburgerMenuService.updateShowHamburgerMenuStatus(false);

    // update the current page Id
    this.pageDetailService.updateCurrentPageId(PageId.PageNotFound);

    // scroll to the top of the page on reload
    this.scrollTopService.setScrollTop();
  }

}
