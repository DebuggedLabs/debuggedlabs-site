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
   * Override full window view width to be 60%
   */
  getFullWindowViewWidth(): number {
    return 60;
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
