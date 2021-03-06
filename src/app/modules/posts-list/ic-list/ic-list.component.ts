import { Component, OnInit } from '@angular/core';
import { PostsListBaseComponent } from '../posts-list-base/posts-list-base.component';
import { Post } from 'src/app/definitions/interfaces';
import { WidthService } from 'src/app/services/width.service';
import { PostCardType } from 'src/app/definitions/types';

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

  constructor(private myWidthService: WidthService) {
    super(myWidthService);
  }

  ngOnInit() {
    this.featuredPost = this.posts[0];
    this.verticalPost = this.posts[1];
    this.horizontalPostTop = this.posts[2];
    this.horizontalPostBottom = this.posts[3];
  }

}
