import { Component, OnInit } from '@angular/core';
import { PostsListBaseComponent } from '../posts-list-base/posts-list-base.component';
import { Post } from 'src/app/definitions/interfaces';
import { WidthService } from 'src/app/services/width.service';

@Component({
  selector: 'app-ic-list',
  templateUrl: './ic-list.component.html',
  styleUrls: ['./ic-list.component.css']
})
export class ICListComponent extends PostsListBaseComponent implements OnInit {

  // mapping out our variables
  featuredPost: Post;
  verticalPost: Post;
  horizontalPostTop: Post;
  horizontalPostBottom: Post;

  constructor(private widthService: WidthService) {
    super();
  }

  ngOnInit() {
    this.featuredPost = this.posts[0];
    this.verticalPost = this.posts[1];
    this.horizontalPostTop = this.posts[2];
    this.horizontalPostBottom = this.posts[3];
  }

  /**
   * Return a margin right if not on a mobile device
   */
  getMarginRight(): number {
    if (this.widthService.isMobileOrNarrowView()){
      return 0;
    }
    return 1.5;
  }

  getHorizontalClass(): string{
    if (this.widthService.isMobileOrNarrowView()) {
      return "";
    }
    return "ic-horiz";
  }

}
