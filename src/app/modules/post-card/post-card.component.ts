import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/definitions/interfaces';
import { PostCardType } from 'src/app/definitions/types';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() cardType: PostCardType;
  @Input() post: Post;

  // boolean determining which card type to show
  public isFeaturedCard: boolean;
  public isColumnCard: boolean;
  public isGalleryCard: boolean;
  public isHorizontalCard: boolean;
  public isRowListCard: boolean;

  constructor() {}

  ngOnInit() {
    this.isFeaturedCard = this.cardType === PostCardType.Featured;
    this.isColumnCard = this.cardType === PostCardType.Column;
    this.isGalleryCard = this.cardType === PostCardType.Gallery;
    this.isHorizontalCard = this.cardType === PostCardType.Horizontal;
    this.isRowListCard = this.cardType === PostCardType.RowList;
  }
}
