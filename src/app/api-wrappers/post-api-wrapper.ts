import { HttpClient } from '@angular/common/http';
import { Post } from '../definitions/interfaces';
import { AuthorDetailService } from '../services/author-detail.service';
import { ImageDetailService } from '../services/image-detail.service';
import { ApiWrapper } from './api-wrapper-base';
import { PostEntry } from './backend-types/postEntry';

export class PostApiWrapper extends ApiWrapper {

  constructor(private httpClient: HttpClient,
              private authorDetailService: AuthorDetailService,
              private imageDetailService: ImageDetailService) {
    super(httpClient);
  }

  /**
   * Get single post from backend CMS
   * @param postId id of the post to retrieve
   * @param serviceFunction callback function to pass the post to
   */
  getSinglePost(postId: string, serviceFunction: (Post) => void) {
    const postUri: string  = this.postUrl + "/" + postId;
    this.httpClient.get(postUri)
      .subscribe(
        data => {
          // extract the post from the data
          this.convertDataToPost((data as any).data, post => {
            serviceFunction(post);
          });
        },
        error => {
          serviceFunction(null);
        });
  }

  /**
   * Convert JSON data to Post
   * @param data data from backend CMS
   */
  private convertDataToPost(data: PostEntry, callback: (Post) => void): Post {
    if (data.primary_author != null && data.status === "published" && data.feature_image != null) {
      // first, create a list of the author ids to query
      let teamProfileIds: string[] = [];

      // return null if primary author is not set (non-zero)
      if (data.primary_author == "0" || data.primary_author == null) {
        return null;
      }
      else {
        teamProfileIds.push(this.getTeamProfileId(data.primary_author));
        if (data.secondary_author != "0" && data.secondary_author != null) {
          teamProfileIds.push(this.getTeamProfileId(data.secondary_author));
        }
        if (data.tertiary_author != "0" && data.tertiary_author != null) {
          teamProfileIds.push(this.getTeamProfileId(data.tertiary_author));
        }
        if (data.quarternary_author != "0" && data.quarternary_author != null) {
          teamProfileIds.push(this.getTeamProfileId(data.quarternary_author));
        }
      }
      this.imageDetailService.getFullImage(data.feature_image, imageUrl => {
        this.imageDetailService.getThumbnailImage(data.feature_image, thumbnailUrl => {
          this.authorDetailService.getMultipleTeamProfiles(teamProfileIds, profiles => {
            let post: Post =
            {
              id: data.id,
              title: data.title,
              authors: profiles,
              publishedDate: new Date(data.created_on),
              modifiedDate: new Date(data.modified_on),
              topic: data.topic,
              teaser: data.teaser,
              thumbnailArtUrl: thumbnailUrl,
              featuredArtURL: imageUrl,
              featuredArtAlt: data.featured_alt,
              additionalArtURLs: [], // TODO, figure this out
              additionalArtAlts: [], // TODO, figure this out
              content: data.content,
              socialMediaLinks: null // TODO, figure this out
            };
            callback(post);
          })
        })
      });
    }
    callback(null);
  }

  /**
   * Get corresponding team profile ID for the author
   * @param authorString author ID string returned from backend CMS
   */
  private getTeamProfileId(authorString: string): string {
    if (authorString == null || authorString == undefined) {
      return null;
    }

    let authorIdNumber: number = +authorString;
    authorIdNumber--;
    return "" + authorIdNumber;
  }
}
