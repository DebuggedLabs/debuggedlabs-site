import { KeyValue } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApiWrapper } from './api-wrapper-base';
import { ImageUrlCacheItem }  from '../definitions/types';

export class ImageApiWrapper extends ApiWrapper {

  private IMAGE_CACHE_KEY: string = "image-cache-key-";
  private THUMBNAIL_CACHE_KEY: string = "thumbnail-cache-key-";

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  /**
   * Get original image url from the backend
   * @param imageId the image whose original image url we want
   * @param serviceFunction the service function to call once we have the data
   */
  getOriginalImageUrl(imageId: string, serviceFunction: (string) => void) {
    // returned the cached value if we already retrieved it before
    if (this.isOriginalImageInCache(imageId)) {
      var imageObject: ImageUrlCacheItem = JSON.parse(localStorage.getItem(this.getImageIdCacheKey(imageId)));
      serviceFunction(imageObject.url);
      return;
    }

    const imageUri: string = this.imageDetailUrl + imageId;
    this.httpClient.get(imageUri)
      .subscribe({
        next: data => {
          // extract the original image url
          let originalImageUrl = (data as any).data.data.full_url;
          serviceFunction(originalImageUrl);
          this.updateOriginalImageCache(imageId, originalImageUrl);
        },
        error: error => this.handleError(error, `getOriginalImageUrl imageId=${imageId}`).bind(this)
      });
  }

  /**
   * Get thumbnail image url from the backend
   * @param imageId the image whose original image url we want
   * @param serviceFunction the service function to call once we have the data
   */
  getThumbnailImageUrl(imageId: string, serviceFunction: (string) => void) {
    // returned the cached value if we already retrieved it before
    if (this.isThumbnailInCache(imageId)) {
      var imageObject: ImageUrlCacheItem = JSON.parse(localStorage.getItem(this.getImageIdCacheKey(imageId)));
      serviceFunction(imageObject.url);
      return;
    }

    const imageUri: string = this.imageDetailUrl + imageId;
    this.httpClient.get(imageUri)
      .subscribe({
        next: data => {
          // extract the original image url
          let thumbnailData = (data as any).data.data.thumbnails as any[];
          let thumbanailUrl = thumbnailData[0].url;
          serviceFunction(thumbanailUrl);
          this.updateThumbnailCache(imageId, thumbanailUrl);
        },
        error: error => this.handleError(error, `getOriginalImageUrl imageId=${imageId}`).bind(this)
      });
  }

  /**
   * Get image cache key for retrieval, setting
   * @param imageId image ID for which we need to cache key
   */
  private getImageIdCacheKey(imageId: string) {
    return this.IMAGE_CACHE_KEY + imageId;
  }

  /**
   * Get image cache key for retrieval, setting
   * @param thumbnail thumbnail for which we need to cache key
   */
  private getThumbnailCacheKey(thumbnail: string) {
    return this.THUMBNAIL_CACHE_KEY + thumbnail;
  }

  /**
   * Returns whether the original image is in caceh
   * @param imageId Image ID that was queried
   * @param originalImageUrl The image url retrieved from the backend
   */
  private updateOriginalImageCache(imageId: string, originalImageUrl: string) {
    let currentDate = new Date();
    let cacheItem: ImageUrlCacheItem = { url: originalImageUrl, date: currentDate };
    localStorage.setItem(this.getImageIdCacheKey(imageId), JSON.stringify(cacheItem));
  }

  /**
   * Returns whether the original image is in caceh
   * @param imageId Image ID that was queried
   * @param thumbnailUrl The thumbnail url retrieved from the backend
   */
  private updateThumbnailCache(thumbnail: string, thumbnailUrl: string) {
    let currentDate = new Date();
    let cacheItem: ImageUrlCacheItem = { url: thumbnailUrl, date: currentDate };
    localStorage.setItem(this.getThumbnailCacheKey(thumbnail), JSON.stringify(cacheItem));
  }

  /**
   * Returns whether the original image is in caceh
   * @param imageId The image Id being queried
   */
  private isOriginalImageInCache(imageId: string): boolean {
    // if cache has the image ID, check to see if it was updated within the last 1 hour
    var cacheObject = localStorage.getItem(this.getImageIdCacheKey(imageId));
    if (cacheObject != null) {
      let entryDate: Date = new Date(JSON.parse(cacheObject).date);
      let difference: number = (new Date()).getHours() - entryDate.getHours();
      return difference <= 1;
    }

    return false;
  }

  /**
  * Returns whether the thumbnail image is in cache
  * @param thumbnail The image Id being queried
  */
  private isThumbnailInCache(thumbnail: string): boolean {
    // if cache has the thumbnail, check to see if it was updated within the last 1 hour
    var cacheObject = localStorage.getItem(this.getThumbnailCacheKey(thumbnail));
    if (cacheObject != null) {
      let entryDate: Date = new Date(JSON.parse(cacheObject).date);
      let difference: number = (new Date()).getHours() - entryDate.getHours();
      return difference <= 1;
    }

    return false;
  }

}
