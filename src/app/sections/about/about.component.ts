import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TeamProfile } from 'src/app/definitions/teamProfile';
import { PageDetailsService, PageId } from 'src/app/services/page-details.service';
import { WidthService } from 'src/app/services/width.service';
import { AuthorDetailService } from 'src/app/services/author-detail.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public iconUrl: string;
  public backgroundColor: string;

  teamProfiles: TeamProfile[];

  constructor(private titleService: Title,
              private router: ActivatedRoute,
              private pageDetailService: PageDetailsService,
              private showHamnburgerMenuService: WidthService,
              private authorDetailService: AuthorDetailService) {
    authorDetailService.getAllTeamProfiles((teamProfiles: TeamProfile[]) => {
      this.teamProfiles = teamProfiles;
      console.log(teamProfiles);
    });
  }

  ngOnInit() {
    this.router.data
      .subscribe((data: { title: string, iconUrl: string, backgroundColor: string }) => {
        this.titleService.setTitle(data.title);
        this.iconUrl = data.iconUrl;
        this.backgroundColor = data.backgroundColor;
      });
      this.pageDetailService.updateCurrentPageId(PageId.About);
      this.showHamnburgerMenuService.updateShowHamburgerMenuStatus(false);
  }

}
