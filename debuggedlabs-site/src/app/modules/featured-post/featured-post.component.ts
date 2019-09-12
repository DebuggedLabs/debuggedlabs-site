import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.css']
})
export class FeaturedPostComponent implements OnInit {

  @Input() featuredArtUrl: string;
  @Input() headline: string;
  @Input() author: string;
  @Input() teaserText: string;

  constructor() { }

  ngOnInit() {
  }

}
