import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-podcast',
  templateUrl: './featured-podcast.component.html',
  styleUrls: ['./featured-podcast.component.css']
})
export class FeaturedPodcastComponent implements OnInit {

  @Input() featuredArtUrl: string;
  @Input() podcastTitle: string;
  @Input() episodeTitle: string;
  @Input() teaserText: string;

  constructor() { }

  ngOnInit() {
  }

}
