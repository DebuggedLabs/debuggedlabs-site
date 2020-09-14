import { KeyValue } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApiWrapper } from './api-wrapper-base';

export class ImageApiWrapper extends ApiWrapper {

  private originalImageCache = new Map<string, KeyValue<string, Date>>();
  private thumbnailImageCache = new Map<string, KeyValue<string, Date>>();


  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.originalImageCache = new Map<string, KeyValue<string, Date>>();
    this.thumbnailImageCache = new Map<string, KeyValue<string, Date>>();
  }

  /**
   * Get original image url from the backend
   * @param imageId the image whose original image url we want
   * @param serviceFunction the service function to call once we have the data
   */
  getOriginalImageUrl(imageId: string, serviceFunction: (string) => void) {
    // returned the cached value if we already retrieved it before
    if (this.isOriginalImageInCache(imageId)) {
      return this.originalImageCache.get(imageId).key;
    }

    const imageUri: string = this.imageDetailUrl + imageId;
    this.httpClient.get(imageUri)
      .subscribe(
        data => {
          // extract the original image url
          let originalImageUrl = (data as any).data.data.full_url;
          serviceFunction(originalImageUrl);
        },
        error => this.handleError(error, `getOriginalImageUrl imageId=${imageId}`).bind(this)
      );
  }

  /**
   * Get thumbnail image url from the backend
   * @param imageId the image whose original image url we want
   * @param serviceFunction the service function to call once we have the data
   */
  getThumbnailImageUrl(imageId: string, serviceFunction: (string) => void) {
    // returned the cached value if we already retrieved it before
    if (this.isThumbnailInCache(imageId)) {
      return this.thumbnailImageCache.get(imageId).key;
    }

    const imageUri: string = this.imageDetailUrl + imageId;
    this.httpClient.get(imageUri)
      .subscribe(
        data => {
          // extract the original image url
          let thumbnailData = (data as any).data.data.thumbnails as any[];
          let thumbanailUrl = thumbnailData[0].url;
          serviceFunction(thumbanailUrl);
        },
        error => this.handleError(error, `getOriginalImageUrl imageId=${imageId}`).bind(this)
      );
  }

  /**
   * Returns whether the original image is in caceh
   * @param teamProfileId The image Id being queried
   */
  private isOriginalImageInCache(imageId: string): boolean {
    // if cache has the team profile ID, check to see if it was updated within the last 1 hour
    if (this.originalImageCache.has(imageId)) {
      let cacheEntry: KeyValue<string, Date> = this.originalImageCache.get(imageId);
      let difference: number = (new Date()).getHours() - cacheEntry.value.getHours();
      return difference >= 1;
    }

    return false;
  }

  /**
  * Returns whether the thumbnail image is in cache
  * @param teamProfileId The image Id being queried
  */
  private isThumbnailInCache(imageId: string): boolean {
    // if cache has the team profile ID, check to see if it was updated within the last 1 hour
    if (this.thumbnailImageCache.has(imageId)) {
      let cacheEntry: KeyValue<string, Date> = this.thumbnailImageCache.get(imageId);
      let difference: number = (new Date()).getHours() - cacheEntry.value.getHours();
      return difference >= 1;
    }

    return false;
  }

}
