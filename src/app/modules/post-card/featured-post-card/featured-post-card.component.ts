import { Component, OnInit } from '@angular/core';
import { PostCardBaseComponent } from '../post-card-base/post-card-base.component';
import { WidthService } from 'src/app/services/width.service';

@Component({
  selector: 'app-featured-post-card',
  templateUrl: './featured-post-card.component.html',
  styleUrls: ['./featured-post-card.component.css']
})
export class FeaturedPostCardComponent extends PostCardBaseComponent implements OnInit {

  constructor(private myWidthService: WidthService) {
    super(myWidthService);
  }

  ngOnInit() {
  }

}
