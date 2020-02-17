import { Component, OnInit, Input } from '@angular/core';
import { TextPost } from 'src/app/definitions/textpost';
import { Post } from 'src/app/definitions/interfaces';
import { WidthService } from 'src/app/services/width.service';
import { PodcastPost } from 'src/app/definitions/podcast';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.css']
})
export class FeaturedPostComponent implements OnInit {

  @Input() featuredPost: Post;

  constructor(private widthService: WidthService) {}

  ngOnInit() {
    console.log(this.featuredPost);
  }

  getCardWidth() {
    if (this.widthService.isMobileOrNarrowView()) {
      return 100;
    }
    return 40;
  }

}
