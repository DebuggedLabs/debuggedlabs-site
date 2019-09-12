import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ScrollTopService } from '../../services/scroll-top.service';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {

  public iconUrl: string;
  public backgroundColor: string;
  public isShowingFeaturedPost: boolean;
  public pageNumber: number;

  constructor(private titleService: Title, 
              private route: ActivatedRoute,
              private router: Router,
              private scrollTopService: ScrollTopService) { }

  ngOnInit() {
    // get the side data from router-config
    this.route.data
      .subscribe((data: { title: string, iconUrl: string, backgroundColor: string }) => {
        this.titleService.setTitle(data.title);
        this.iconUrl = data.iconUrl;
        this.backgroundColor = data.backgroundColor;
      });
    
    // get the query params
    this.route.paramMap.subscribe(params => {
      this.getPageNumber(params);
    });


    this.scrollTopService.setScrollTop();
    this.isShowingFeaturedPost = true; // need to change this to be modular
  }

  /**
   * Get the page number from the URL params
   * @param params ParamMap passed in from the ActivatedRoute
   */
  getPageNumber(params: ParamMap): void {
    const pageNumber = params.get('page') == null ? 1 : parseInt(params.get('page'));
    console.log(pageNumber);
    if (pageNumber > 0) {
      this.pageNumber = pageNumber - 1;
    }
    else {
      this.pageNumber = 0;
      this.router.navigate(['podcasts']);
    }

    // if not on first page of podcasts, then we're not showing a featured post
    this.isShowingFeaturedPost = this.pageNumber > 1 ? false : true;
  }

}
