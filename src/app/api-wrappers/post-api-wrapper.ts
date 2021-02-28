import { HttpClient } from '@angular/common/http';
import { Post } from '../definitions/interfaces';
import { PodcastPost } from '../definitions/podcast';
import { TextPost } from '../definitions/textpost';
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
      if (this.getTeamProfileId(data.primary_author) == null) {
        return null;
      }
      else {
        teamProfileIds.push(this.getTeamProfileId(data.primary_author));
        if (this.getTeamProfileId(data.secondary_author) != null) {
          teamProfileIds.push(this.getTeamProfileId(data.secondary_author));
        }
        if (this.getTeamProfileId(data.tertiary_author) != null) {
          teamProfileIds.push(this.getTeamProfileId(data.tertiary_author));
        }
        if (this.getTeamProfileId(data.quarternary_author) != null) {
          teamProfileIds.push(this.getTeamProfileId(data.quarternary_author));
        }
      }

      // determine if podcast post or text post
      let isPodcastPost: boolean = this.getIsPodcastBoolean(data.is_podcast);

      this.imageDetailService.getFullImage(data.feature_image, imageUrl => {
        this.imageDetailService.getThumbnailImage(data.feature_image, thumbnailUrl => {
          this.authorDetailService.getMultipleTeamProfiles(teamProfileIds, profiles => {
            let post: Post = null;
            // for podcast posts
            if (isPodcastPost) {
              post = new PodcastPost(
                data.id,
                data.title,
                profiles,
                new Date(data.created_on), // published date
                data.topic,
                data.teaser,
                imageUrl,
                data.featured_alt,
                [], // TODO additional art url, figure this out
                [], // TODO additional art alt, figure this out
                data.content,
                null, // TODO social media links, figure this out
                new Date(data.modified_on),
                thumbnailUrl,
              );
            }
            else {
              // for text posts
              post = new TextPost(
                data.id,
                data.title,
                profiles,
                new Date(data.created_on), // published date
                data.topic,
                data.teaser,
                imageUrl,
                data.featured_alt,
                [], // TODO additional art url, figure this out
                [], // TODO additional art alt, figure this out
                data.content,
                null, // TODO social media links, figure this out
                new Date(data.modified_on),
                thumbnailUrl,
              );
            }
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
    if (authorString == null || authorString == undefined || authorString == "0" || authorString == "1") {
      return null;
    }

    let authorIdNumber: number = +authorString;
    authorIdNumber--;
    return authorIdNumber > 0 ? "" + authorIdNumber : null;
  }

  /**
   * Function determining if post is a podcast
   * @param isPodcastString string indicating if podcast string
   */
  private getIsPodcastBoolean(isPodcastString: string): boolean {
    if (isPodcastString == null || isPodcastString == undefined) {
      return false;
    }
    let b = JSON.parse(isPodcastString);
    return b;
  }
}
