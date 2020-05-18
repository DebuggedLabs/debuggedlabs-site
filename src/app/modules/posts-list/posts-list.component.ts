import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/definitions/interfaces';
import { PostListType } from 'src/app/definitions/types';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  @Input() listType: PostListType;
  @Input() posts: Post[];

  public isCList: boolean = true;
  public isICList: boolean = true;
  public isGalleryList: boolean = true;
  public isRowList: boolean = true;

  constructor() { }

  ngOnInit() {
    // check which type of list we're dealing with
    this.isCList = this.listType === PostListType.CList;
    this.isICList = this.listType === PostListType.ICList;
    this.isGalleryList = this.listType === PostListType.GalleryList;
    this.isRowList = this.listType === PostListType.RowList;
  }
}
