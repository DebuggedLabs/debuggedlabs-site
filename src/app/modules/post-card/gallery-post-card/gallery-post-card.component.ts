import { Component, OnInit } from '@angular/core';
import { PostCardBaseComponent } from '../post-card-base/post-card-base.component';
import { WidthService } from 'src/app/services/width.service';

@Component({
  selector: 'app-gallery-post-card',
  templateUrl: './gallery-post-card.component.html',
  styleUrls: ['./gallery-post-card.component.css']
})
export class GalleryPostCardComponent extends PostCardBaseComponent implements OnInit {

  constructor(private myWidthService: WidthService) {
    super(myWidthService);
  }

  ngOnInit() {
  }

}
