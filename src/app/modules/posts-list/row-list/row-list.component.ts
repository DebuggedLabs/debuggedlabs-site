import { Component, OnInit, Input } from '@angular/core';
import { PostsListBaseComponent } from '../posts-list-base/posts-list-base.component';
import { Post } from 'src/app/definitions/interfaces';
import { WidthService } from 'src/app/services/width.service';

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

  constructor(private myWidthService: WidthService) {
    super(myWidthService);
  }

  ngOnInit() {
    this.numRows = Math.ceil(this.posts.length / this.NUMBER_OF_COLUMNS);
    console.log("number of rows = " + this.numRows);
  }

  /**
   * Get indices for each row to display
   */
  getIndices(): number[] {
    var indices: number [] = [];
    for (var i = 0; i < this.numRows; i++)
    {
      indices.push(i);
    }
    return indices;
  }

  /**
   * Get the next row to display
   */
  getNextRow(rowIndex: number): Post[] {
    var rowStart = rowIndex * this.NUMBER_OF_COLUMNS;
    return this.posts.slice(rowStart, rowStart + this.NUMBER_OF_COLUMNS);
  }

}
