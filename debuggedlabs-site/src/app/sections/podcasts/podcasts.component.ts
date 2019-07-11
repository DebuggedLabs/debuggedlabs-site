import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ScrollTopService } from '../../services/scroll-top-service.service';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {

  public iconUrl: string;
  public backgroundColor: string;

  constructor(private titleService: Title, 
              private router: ActivatedRoute,
              private scrollTopService: ScrollTopService) { }

  ngOnInit() {
    this.router.data
      .subscribe((data: { title: string, iconUrl: string, backgroundColor: string }) => {
        this.titleService.setTitle(data.title);
        this.iconUrl = data.iconUrl;
        this.backgroundColor = data.backgroundColor;
      });
    this.scrollTopService.setScrollTop();
  }

}
