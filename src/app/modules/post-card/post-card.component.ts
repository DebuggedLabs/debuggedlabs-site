import { Component, OnInit, Input } from '@angular/core';
import { TextPost } from 'src/app/definitions/textpost';
import { Post } from 'src/app/definitions/interfaces';
import { WidthService } from 'src/app/services/width.service';
import { PodcastPost } from 'src/app/definitions/podcast';
import { PostCardType } from 'src/app/definitions/types';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() cardType: PostCardType;
  @Input() post: Post;

  constructor(private widthService: WidthService) {}

  ngOnInit() {
    console.log(this.post);
    console.log("Card type: ", this.cardType);
  }

  /**
   * Get card width based on card type
   */
  getCardWidth(): number {
    // return 100% view per card if mobile view
    if (this.widthService.isMobileOrNarrowView()) {
      return 100;
    }

    // have different widths based on post card type
    if (this.cardType == PostCardType.Featured) {
      return 100;
    }
    else if (this.cardType == PostCardType.Column) {
      return 50;
    }
    return 100;
  }

  /**
   * Get card height based on card type
   */
  getCardHeight(): number {
    // if (this.widthService.isMobileOrNarrowView()) {
    //   return 450;
    // }
    return 525;
  }
}
