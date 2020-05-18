import { Component, OnInit } from '@angular/core';
import { PostsListBaseComponent } from '../posts-list-base/posts-list-base.component';
import { Post } from 'src/app/definitions/interfaces';
import { WidthService } from 'src/app/services/width.service';

@Component({
  selector: 'app-c-list',
  templateUrl: './c-list.component.html',
  styleUrls: ['./c-list.component.css']
})
export class CListComponent extends PostsListBaseComponent implements OnInit {

  // mapping out our variables
  featuredPost: Post;
  horizontalPostTop: Post;
  horizontalPostBottom: Post;

  constructor(private myWidthService: WidthService) {
    super(myWidthService);
  }

  ngOnInit() {
    this.featuredPost = this.posts[0];
    this.horizontalPostTop = this.posts[1];
    this.horizontalPostBottom = this.posts[2];
  }

}
