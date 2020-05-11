import { Component, OnInit } from '@angular/core';
import { PostsListBaseComponent } from '../posts-list-base/posts-list-base.component';

@Component({
  selector: 'app-e-list',
  templateUrl: './e-list.component.html',
  styleUrls: ['./e-list.component.css']
})
export class EListComponent extends PostsListBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
