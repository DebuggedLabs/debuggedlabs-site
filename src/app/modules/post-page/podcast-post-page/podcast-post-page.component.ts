import { Component, OnInit } from '@angular/core';
import { WidthService } from 'src/app/services/width.service';
import { PostPageBaseComponent } from '../post-page-base/post-page-base.component';

@Component({
  selector: 'app-podcast-post-page',
  templateUrl: './podcast-post-page.component.html',
  styleUrls: ['./podcast-post-page.component.css']
})
export class PodcastPostPageComponent extends PostPageBaseComponent implements OnInit {

  constructor(private widthService: WidthService) {
    super(widthService);
  }

  ngOnInit() {
    console.log(this.postData);
  }

}
