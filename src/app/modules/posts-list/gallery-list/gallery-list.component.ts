import { Component, OnInit } from '@angular/core';
import { PostsListBaseComponent } from '../posts-list-base/posts-list-base.component';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent extends PostsListBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
