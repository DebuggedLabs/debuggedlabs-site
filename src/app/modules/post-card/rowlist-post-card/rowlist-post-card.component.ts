import { Component, OnInit } from '@angular/core';
import { WidthService } from 'src/app/services/width.service';
import { PostCardBaseComponent } from '../post-card-base/post-card-base.component';

@Component({
  selector: 'app-rowlist-post-card',
  templateUrl: './rowlist-post-card.component.html',
  styleUrls: ['./rowlist-post-card.component.css']
})
export class RowlistPostCardComponent extends PostCardBaseComponent implements OnInit {

  constructor(private myWidthService: WidthService) {
    super(myWidthService);
  }

  ngOnInit() {
  }

}


