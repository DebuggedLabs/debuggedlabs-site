import { Component, OnInit, Input } from '@angular/core';
import { TextPost } from 'src/app/definitions/textpost';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.css']
})
export class FeaturedPostComponent implements OnInit {

  @Input() featuredPost: TextPost;

  constructor() {}

  ngOnInit() {
  }

}
