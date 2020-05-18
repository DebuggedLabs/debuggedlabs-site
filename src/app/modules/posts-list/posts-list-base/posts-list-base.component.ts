import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/definitions/interfaces';
import { PostCardType } from 'src/app/definitions/types';
import { WidthService } from 'src/app/services/width.service';

@Component({
  selector: 'app-posts-list-base',
  templateUrl: './posts-list-base.component.html',
  styleUrls: ['./posts-list-base.component.css']
})
export class PostsListBaseComponent implements OnInit {

  @Input() posts: Post[];

  constructor(private widthService: WidthService) { }

  ngOnInit() {
  }

  /**
     * Return a margin right if not on a mobile device
     */
  getMarginRight(): number {
    if (this.widthService.isMobileOrNarrowView()) {
      return 0;
    }
    return 1.5;
  }

  /**
   * Get card class based on mobile or not
   * @param cardType card type
   */
  getCardClass(cardType: PostCardType): string {
    var mobileOption: string = cardType === PostCardType.Horizontal ? "" : "post-mobile";
    var fullOption: string;

    switch (cardType) {
      case PostCardType.Featured:
        fullOption = "feature-post"
        break;
      case PostCardType.Column:
        fullOption = "column-post";
        break;
      case PostCardType.Horizontal:
        fullOption = "horiz-post";
        break
    }

    if (this.widthService.isMobileOrNarrowView()) {
      return mobileOption;
    }
    return fullOption;
  }

}
