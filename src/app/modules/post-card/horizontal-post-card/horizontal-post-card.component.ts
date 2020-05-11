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

}
