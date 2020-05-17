import { Component, OnInit } from '@angular/core';
import { PostCardBaseComponent } from '../post-card-base/post-card-base.component';
import { WidthService } from 'src/app/services/width.service';

@Component({
  selector: 'app-horizontal-post-card',
  templateUrl: './horizontal-post-card.component.html',
  styleUrls: ['./horizontal-post-card.component.css']
})
export class HorizontalPostCardComponent extends PostCardBaseComponent implements OnInit {

  constructor(private myWidthService: WidthService) {
    super(myWidthService);
  }

  ngOnInit() {
  }

  /**
   * Override height to be smaller
   */
  getCardHeightInPixels(): number {
    if (!this.myWidthService.isMobileOrNarrowView()) {
      return 262;
    }
    return 480;
  }

  /**
   * Programmatically get group class for card
   * @param i group number (1 or 2)
   */
  getGroupClass(i: number): string {
    if (this.myWidthService.isMobileOrNarrowView()) {
      return "";
    }
    return "group-" + i;
  }

  /**
   * Get card byline section alignment based on width
   */
  getCardBylineSectionClass(): string {
    if (this.myWidthService.isMobileOrNarrowView()) {
      return "card-byline-section-right";
    }
    return "card-byline-section-left";
  }

  /**
   * Determine image class based on mobile view status
   */
  getImageClass(): string {
    console.log("Getting image class");
    if (this.myWidthService.isMobileOrNarrowView()) {
      return "card-image-mobile";
    }
    return "card-image-full";
  }
}
