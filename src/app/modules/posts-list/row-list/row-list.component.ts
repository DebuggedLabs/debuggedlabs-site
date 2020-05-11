import { Component, OnInit, Input } from '@angular/core';
import { PostsListBaseComponent } from '../posts-list-base/posts-list-base.component';
import { Post } from 'src/app/definitions/interfaces';

@Component({
  selector: 'app-row-list',
  templateUrl: './row-list.component.html',
  styleUrls: ['./row-list.component.css']
})
export class RowListComponent extends PostsListBaseComponent implements OnInit {

  // number of rows
  numRows: number;

  // constant number of columns = 3
  NUMBER_OF_COLUMNS: number = 3;

  constructor() {
    super();
  }

  ngOnInit() {
    this.numRows = this.posts.length / 3;
  }

  /**
   * Get indices for each row to display
   */
  getIndices(): number[] {
    return Array(this.numRows).fill(value => value).map((value, index) => index);
  }

  /**
   * Get the next row to display
   */
  getNextRow(rowIndex: number): Post[] {
    var rowStart = rowIndex * this.NUMBER_OF_COLUMNS;
    return this.posts.slice(rowStart, rowStart + this.NUMBER_OF_COLUMNS - 1);
  }

}
