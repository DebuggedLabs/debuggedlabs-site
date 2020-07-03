
import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/definitions/interfaces';
import { PostListType } from 'src/app/definitions/types';
import { WidthService } from 'src/app/services/width.service';

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

  constructor(private widthService: WidthService) { }

  ngOnInit() {
    // check which type of list we're dealing with
    this.isCList = this.listType === PostListType.CList;
    this.isICList = this.listType === PostListType.ICList;
  }

  isGalleryList(): boolean {
    return this.listType === PostListType.GalleryList && !this.widthService.isMobileOrNarrowView();
  }

  isRowList(): boolean {
    if (this.listType === PostListType.RowList) {
      return true;
    }
    return this.listType === PostListType.GalleryList && this.widthService.isMobileOrNarrowView();
  }
}
