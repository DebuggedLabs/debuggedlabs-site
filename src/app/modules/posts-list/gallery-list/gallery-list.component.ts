import { Component, OnInit } from '@angular/core';
import { PostsListBaseComponent } from '../posts-list-base/posts-list-base.component';
import { WidthService } from 'src/app/services/width.service';
import { Post } from 'src/app/definitions/interfaces';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent extends PostsListBaseComponent implements OnInit {

  public primaryPost: Post;
  public secondaryPost: Post;

  constructor(private myWidthService: WidthService) {
    super(myWidthService);
  }

  ngOnInit() {
    this.primaryPost = this.posts[0];
    this.secondaryPost = this.posts[1];
  }
}
