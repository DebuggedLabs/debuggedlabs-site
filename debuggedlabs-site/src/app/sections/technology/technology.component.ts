import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PageDetailsService, PageId } from 'src/app/services/page-details.service';
import { ShowHamburgerMenuService } from 'src/app/services/show-hamburger-menu-service.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  
  public iconUrl: string;
  public backgroundColor: string;

  constructor(private titleService: Title, 
              private router: ActivatedRoute,
              private pageDetailService: PageDetailsService,
              private showHamburgerService: ShowHamburgerMenuService) { }

  ngOnInit() {
    this.router.data
      .subscribe((data: { title: string, iconUrl: string, backgroundColor: string }) => {
        this.titleService.setTitle(data.title);
        this.iconUrl = data.iconUrl;
        this.backgroundColor = data.backgroundColor;
      });

    // close hamburger menu
    this.showHamburgerService.updateShowHamburgerMenuStatus(false);

    this.pageDetailService.updateCurrentPageId(PageId.Technology);
  }

}
