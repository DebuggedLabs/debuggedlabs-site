import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {

  constructor(private titleService: Title, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.data
      .subscribe((data: { title: string }) => {
        this.titleService.setTitle(data.title);
      });
  }

}
