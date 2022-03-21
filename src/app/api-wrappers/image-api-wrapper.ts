import { HttpClient } from '@angular/common/http';
import { ApiWrapper } from './api-wrapper-base';

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
    const imageUri: string = this.imageDownloadUrl + imageId;
    serviceFunction(imageUri);
  }

  /**
   * Get thumbnail image url from the backend
   * @param imageId the image whose original image url we want
   * @param serviceFunction the service function to call once we have the data
   */
  getThumbnailImageUrl(imageId: string, serviceFunction: (string) => void) {
    const thumbnailUri: string = this.imageDetailUrl + imageId + this.thumbnailUrlSuffix;
    serviceFunction(thumbnailUri);
  }
}
