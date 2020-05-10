import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/definitions/interfaces';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  @Input() posts: Post[];
  @Input() numRows: number;
  @Input() numCols: number;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Return width of each post in the list
   */
  getPostWidth(): number {
    return 100 / this.numCols;
  }

  /**
   * Return the height of each post in the list
   */
  getPostHeight(): number {
    return 100 / this.numRows;
  }

}
