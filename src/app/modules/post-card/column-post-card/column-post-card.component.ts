import { Component, OnInit } from '@angular/core';
import { PostCardBaseComponent } from '../post-card-base/post-card-base.component';
import { WidthService } from 'src/app/services/width.service';

@Component({
  selector: 'app-column-post-card',
  templateUrl: './column-post-card.component.html',
  styleUrls: ['./column-post-card.component.css']
})
export class ColumnPostCardComponent extends PostCardBaseComponent implements OnInit {

  constructor(private myWidthService: WidthService) {
    super(myWidthService);
  }

  ngOnInit() {
  }

  /**
   * Determine image class based on mobile view status
   */
  getImageClass(): string {
    if (this.myWidthService.isMobileOrNarrowView()) {
      return "card-image-mobile";
    }
    return "card-image-full";
  }

  /**
   * Get max width in pixels based on mobile view status
   */
  getMaxWidthInPixels(): number {
    if (this.myWidthService.isMobileOrNarrowView()) {
      return 500;
    }
    return 500 * 0.6;
  }

}
