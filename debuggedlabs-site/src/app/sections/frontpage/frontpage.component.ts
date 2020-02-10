import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PageDetailsService, PageId } from 'src/app/services/page-details.service';
import { ShowHamburgerMenuService } from 'src/app/services/show-hamburger-menu-service.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})

export class FrontpageComponent implements OnInit {

  constructor(private titleService: Title, 
              private router: ActivatedRoute,
              private pageDetailService: PageDetailsService,
              private showHamburgerMenuService: ShowHamburgerMenuService) { }

  ngOnInit() {
    this.router.data
      .subscribe((data: { title: string }) => {
        this.titleService.setTitle(data.title);
      });

    // close hamburger menu
    this.showHamburgerMenuService.updateShowHamburgerMenuStatus(false);

    // update the current page Id
    this.pageDetailService.updateCurrentPageId(PageId.Home);
    this.pageDetailService.updateFrontPageShowNavBarStatus(false);
  }
}
