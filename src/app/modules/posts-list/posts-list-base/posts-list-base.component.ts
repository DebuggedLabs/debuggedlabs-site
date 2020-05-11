import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/definitions/interfaces';

@Component({
  selector: 'app-posts-list-base',
  templateUrl: './posts-list-base.component.html',
  styleUrls: ['./posts-list-base.component.css']
})
export class PostsListBaseComponent implements OnInit {

  @Input() posts: Post[];

  constructor() { }

  ngOnInit() {
  }

  /**
   * Featured image height
   */
  getFeaturedImageHeight(): number {
    return -1;
  }

  /**
   * Featured image width
   */
  getFeaturedImageWidth(): number {
    return -1;
  }

  /**
   * Regular image height
   */
  getRegularImageHeight(): number {
    return -1;
  }

  /**
   * Regular image width
   */
  getRegularImageWidth(): number {
    return -1;
  }

}
