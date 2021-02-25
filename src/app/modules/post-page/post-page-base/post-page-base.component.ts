import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/definitions/interfaces';
import { Platforms } from 'src/app/definitions/types';

@Component({
  selector: 'app-post-page-base',
  templateUrl: './post-page-base.component.html',
  styleUrls: ['./post-page-base.component.css']
})
export class PostPageBaseComponent implements OnInit {

  @Input() postData: Post;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Return content of post
   */
  getContent(): string {
    return this.postData.content;
  }

  /**
   * Get date of post
   */
  getPublishedDateString(): string {
    let date = this.postData.publishedDate;
    return date.toLocaleString();
  }

  /**
   * Check if Facebook link is present
   */
  isFacebookLinkPresent(): boolean {
    return this.postData.socialMediaLinks != null &&  this.postData.socialMediaLinks[Platforms.Facebook] != null && this.postData.socialMediaLinks[Platforms.Facebook] != "";
  }

  /**
   * Get Facebook link
   */
  getFacebookLink(): string {
    if (this.isFacebookLinkPresent()) {
      return this.postData.socialMediaLinks[Platforms.Facebook];
    }

    return null;
  }

  /**
   * Check if Twitter link is present
   */
  isTwitterLinkPresent(): boolean {
    return this.postData.socialMediaLinks != null && this.postData.socialMediaLinks[Platforms.Twitter] != null && this.postData.socialMediaLinks[Platforms.Twitter] != "";
  }

  /**
   * Get Twitter link
   */
  getTwitterLink(): string {
    if (this.isFacebookLinkPresent()) {
      return this.postData.socialMediaLinks[Platforms.Twitter];
    }

    return null;
  }

  /**
   * Check if Email link is present
   */
  isEmailLinkPresent(): boolean {
    return this.postData.socialMediaLinks != null && this.postData.socialMediaLinks[Platforms.Email] != null && this.postData.socialMediaLinks[Platforms.Email] != "";
  }

  /**
   * Get Email link
   */
  getEmailLink(): string {
    if (this.isFacebookLinkPresent()) {
      return this.postData.socialMediaLinks[Platforms.Email];
    }

    return null;
  }



}
