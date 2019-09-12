import { Component, OnInit, Input } from '@angular/core';
import { PodcastPost } from 'src/app/definitions/podcast';

@Component({
  selector: 'app-featured-podcast',
  templateUrl: './featured-podcast.component.html',
  styleUrls: ['./featured-podcast.component.css']
})
export class FeaturedPodcastComponent implements OnInit {

  @Input() featuredPodcast: PodcastPost;

  constructor() { }

  ngOnInit() {
    console.log("Featured podcast: ", this.featuredPodcast);
  }

}
