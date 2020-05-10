import { Component, OnInit, Input } from '@angular/core';
import { TextPost } from 'src/app/definitions/textpost';
import { Post } from 'src/app/definitions/interfaces';
import { WidthService } from 'src/app/services/width.service';
import { PodcastPost } from 'src/app/definitions/podcast';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() isFeaturedPost: boolean;
  @Input() post: Post;

  constructor(private widthService: WidthService) {}

  ngOnInit() {
    console.log(this.post);
  }

  getCardWidth() {
    if (this.widthService.isMobileOrNarrowView()) {
      return 100;
    }
    return 40;
  }

}
