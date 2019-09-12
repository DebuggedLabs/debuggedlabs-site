import { Component, OnInit, Input } from '@angular/core';
import { PodcastPost } from '../../definitions/podcast';

@Component({
  selector: 'app-podcasts-list',
  templateUrl: './podcasts-list.component.html',
  styleUrls: ['./podcasts-list.component.css']
})
export class PodcastsListComponent implements OnInit {

  @Input() podcasts: PodcastPost[];

  constructor() {}

  ngOnInit() {
    console.log("Podcasts: ", this.podcasts);
  }
}
