import { Component, OnInit } from '@angular/core';
import { TeamProfile } from 'src/app/definitions/teamProfile';
import { ImageDetailService } from 'src/app/services/image-detail.service';
import { PageDetailsService } from 'src/app/services/page-details.service';
import { WidthService } from 'src/app/services/width.service';
import { PostPageBaseComponent } from '../post-page-base/post-page-base.component';
import { Parser, HtmlRenderer } from 'commonmark';

@Component({
  selector: 'app-text-post-page',
  templateUrl: './text-post-page.component.html',
  styleUrls: ['./text-post-page.component.css']
})
export class TextPostPageComponent extends PostPageBaseComponent implements OnInit {

  private authorMap: Map<string, string>;

  constructor(private widthService: WidthService,
              private myPageDetailService: PageDetailsService,
              private imageDetailService: ImageDetailService) {
    super(widthService, myPageDetailService);
    this.authorMap = new Map<string, string>();
  }

  ngOnInit() {
    console.log(this.postData);
    console.log(this.wasPostUpdated());

    // cache the author profile URLs first
    this.postData.authors.forEach(author => {
      console.log(author);
      this.imageDetailService.getFullImage(author.imageId, imageUrl => {
        this.authorMap.set(author.name, imageUrl);
      });
    });
  }

  /**
   * Get image URL for an author
   */
  getAuthorImageUrl(authorProfile: TeamProfile): string {
    if (this.authorMap.has(authorProfile.name)) {
      return this.authorMap.get(authorProfile.name);
    }

    // return empty string
    return "assets/icons/profile-icon.png";
  }

  /**
   * Get byline image cropper class for mobile/desktop
   */
  getBylineInlineClass(): string {
    if (this.widthService.isMobileOrNarrowView()) {
      return 'image-cropper-mobile';
    }
    return 'image-cropper';
  }

  /**
   * Get author byline text class for mobile/desktop
   */
  getAuthorBylineTextClass(): string {
    if (this.widthService.isMobileOrNarrowView()) {
      return 'author-byline-mobile';
    }
    return 'author-byline';
  }

  /**
   *
   */
  getPostContent(): string {
    var reader = new Parser();
    var writer = new HtmlRenderer();

    // parse the post content
    var parsedBody = reader.parse(this.postData.content);
    return writer.render(parsedBody);
  }

}
