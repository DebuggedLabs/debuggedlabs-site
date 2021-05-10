import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/definitions/interfaces';
import { Platforms } from 'src/app/definitions/types';
import { PageDetailsService, PageId } from 'src/app/services/page-details.service';
import { WidthService } from 'src/app/services/width.service';

@Component({
  selector: 'app-post-page-base',
  templateUrl: './post-page-base.component.html',
  styleUrls: ['./post-page-base.component.css']
})
export class PostPageBaseComponent implements OnInit {

  @Input() postData: Post;

  private dateFormat: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  };

  constructor(private myWidthService: WidthService,
              private pageDetailService: PageDetailsService)
  {
    this.pageDetailService.updateCurrentPageId(PageId.Post);
  }

  ngOnInit() { }

  /**
   * Return content of post
   */
  getContent(): string {
    return this.postData.content;
  }

  /**
   * Get the page id from the list of topics in the post
   * @returns page id from the list of topics in the post
   */
  getPageIdFromPostTopic(): PageId {
    let topic = this.postData.topics[0];
    if (topic == "podcasts")
    {
      return PageId.Podcasts;
    }
    else if (topic == "technology")
    {
      return PageId.Technology;
    }
    else if (topic == "science")
    {
      return PageId.Science;
    }
  }

  /**
   * Get date of post
   */
  getPublishedDateString(): string {
    let date = this.postData.publishedDate;
    return date.toLocaleDateString('default', this.dateFormat);
  }

  /**
   *
   * Returns whether the post was updated
   */
  wasPostUpdated(): boolean {
    return this.postData.shouldShowModifiedDate && this.postData.modifiedDate != null && this.postData.modifiedDate != undefined;
  }

  /**
   * Get updated date of post
   */
  getUpdatedDateString(): string {
    if (this.wasPostUpdated()) {
      return this.postData.modifiedDate.toLocaleString('default', this.dateFormat);
    }
    return null;
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

  /**
  * Determine image class based on mobile view status
  */
  getImageClass(): string {
    if (this.isMobile()) {
      return "featured-art-mobile";
    }
    return "featured-art-full";
  }

  /**
   * Return whether is mobile view
   */
  isMobile(): boolean {
    return this.myWidthService.isMobileOrNarrowView();
  }
}
