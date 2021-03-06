import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/definitions/interfaces';
import { TeamProfile } from 'src/app/definitions/teamProfile';
import { ImageDetailService } from 'src/app/services/image-detail.service';
import { WidthService } from 'src/app/services/width.service';

@Component({
  selector: 'app-post-card-base',
  templateUrl: './post-card-base.component.html',
  styleUrls: ['./post-card-base.component.css']
})
export class PostCardBaseComponent implements OnInit {

  @Input() post: Post;

  constructor(private widthService: WidthService) { }

  ngOnInit() { }

  /**
   * Return width of the card
   */
  getCardWidthInPercentage(): number {
    if (this.widthService.isMobileOrNarrowView()) {
      return this.getMobileViewWidth();
    }
    return this.getFullWindowViewWidth();
  }

  /**
   * Return card height
   */
  getCardHeightInPixels(): number {
    return 546;
  }

  /**
   * Return the mobile view width
   */
  getMobileViewWidth(): number {
    return 100;
  }

  /**
   * Return the full window view width
   */
  getFullWindowViewWidth(): number {
    return 100;
  }

  /**
   * Get link to the post
   */
  getPostLink(): string {
    return "/posts/" + this.post.id;
  }
}
