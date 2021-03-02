import { Component, OnInit } from '@angular/core';
import { WidthService } from 'src/app/services/width.service';
import { PostPageBaseComponent } from '../post-page-base/post-page-base.component';

@Component({
  selector: 'app-text-post-page',
  templateUrl: './text-post-page.component.html',
  styleUrls: ['./text-post-page.component.css']
})
export class TextPostPageComponent extends PostPageBaseComponent implements OnInit {

  constructor(private widthService: WidthService) {
    super(widthService);
  }

  ngOnInit() {
    console.log(this.postData);
  }

}
