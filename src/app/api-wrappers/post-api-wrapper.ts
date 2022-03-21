import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from '../definitions/interfaces';
import { PodcastPost } from '../definitions/podcast';
import { TeamProfile } from '../definitions/teamProfile';
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
      .subscribe({
        next: data => {
          // extract the post from the data
          this.convertDataToPost((data as any).data, post => {
            serviceFunction(post);
          });
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
          // to mark missing posts
          if (err.status/100 >= 4 && err.status/100 < 5) {
            console.log("Couldn't find post");
            serviceFunction(undefined);
          }
          else {
            serviceFunction(null);
          }
        }
      });
  }

  /**
   * Get list of posts written by an author
   * @param authorProfile profile of the author
   * @param callback callback once the values return
   */
  getPostsForAuthor(authorProfile: TeamProfile, callback: (posts: Post[]) => void) {
    // construct the filter string
    let authorArray = [ "primary_author", "secondary_author", "tertiary_author", "quaternary_author" ];
    let filterString = "";

    // search across all author elements
    for (let i = 0; i < authorArray.length; i++)
    {
      if (i == 0) {
        filterString += "?[_or]filter[" + authorArray[i] + "][_eq]=" + authorProfile.id;
      }
      else {
        filterString += "[_or]filter[" + authorArray[i] + "][_eq]=" + authorProfile.id;
      }

      if (i < authorArray.length - 1) {
        filterString += "&"
      }
    }

    // make sure to sort from latest to earliest date
    filterString += "&sort[]=-created_on"
    console.log("Filter string: " + filterString);

    // make the HTTP request
    const postUri: string = this.postUrl + filterString;
    this.httpClient.get(postUri)
      .subscribe({
        next: data => {
          this.convertDataToMultiplePosts(data, (posts: Post[]) => {
            callback(posts);
          });
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
          // to mark missing posts
          if (err.status / 100 >= 4 && err.status / 100 < 5) {
            console.log("Couldn't find post");
            callback(undefined);
          }
          else {
            callback(null);
          }
        }
        });
  }

  /**
   * Convert multiple data entries to Post objects
   * @param data the raw JSON data
   * @param callback callback once data is processed
   */
  private convertDataToMultiplePosts(data: any, callback: (Posts: Post[]) => void) {
    let count = 0;
    let dataArray: [] = (data as any).data;
    let max = dataArray.length;
    let postsArray: Post[] = [];
    this.getMultiplePostsFromDataRecursive(dataArray, postsArray, count, max, posts => {
      callback(posts);
    });
  }

  /**
   * Recursive function to get multiple posts, given a list of JSON data
   * @param dataArray posts to convert to Post objects
   * @param posts pass in array of team profiles
   * @param count current index in the list of ids
   * @param max max index in the list of ids
   * @param callback callback to return the team profile to
   */
  private getMultiplePostsFromDataRecursive(dataArray: [], posts: Post[], count: number, max: number, callback: (posts: Post[]) => void) {
    // if base case hasn't been met, get the current profile and then continue with recursion
    if (count < max) {
      this.convertDataToPost(dataArray[count], post => {
        if (post != null && post != undefined) {
          posts.push(post);
          this.getMultiplePostsFromDataRecursive(dataArray, posts, count + 1, max, nextPosts => {
            posts.concat(nextPosts);
            callback(posts);
          });
        }
      });
    }
    else {
      callback(posts);
    }
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
      let isPodcastPost: boolean = this.convertStringToBoolean(data.is_podcast);

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
                this.convertStringToBoolean(data.show_modified_date)
              );
            }
            else {
              // for text posts
              post = new TextPost(
                data.id,
                data.title,
                profiles,
                new Date(data.created_on + ".000Z"), // published date
                data.topic,
                data.teaser,
                imageUrl,
                data.featured_alt,
                [], // TODO additional art url, figure this out
                [], // TODO additional art alt, figure this out
                data.content,
                null, // TODO social media links, figure this out
                new Date(data.modified_on + ".000Z"),
                thumbnailUrl,
                this.convertStringToBoolean(data.show_modified_date)
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

    return authorString;
  }

  /**
   * Function parsing string to boolean
   * @param str string potentially containing boolean value
   */
  private convertStringToBoolean(str: string): boolean {
    if (str == null || str == undefined) {
      return false;
    }
    let b = JSON.parse(str);
    return b;
  }
}
