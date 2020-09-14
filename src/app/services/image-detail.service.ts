import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageApiWrapper } from '../api-wrappers/image-api-wrapper';

@Injectable({
  providedIn: 'root'
})
export class ImageDetailService {

  private imageApiWrapper: ImageApiWrapper;

  constructor(private http: HttpClient) {
    this.imageApiWrapper = new ImageApiWrapper(http);
  }

  /**
   * Get the original image url from the backend
   * @param imageId id of the image we're trying to retrieve
   * @param callback Callback function once the values are retrieved
   */
  getFullImage(imageId: string, callback: (string) => void){
    this.imageApiWrapper.getOriginalImageUrl(imageId, fullimageUrl => {
      callback(fullimageUrl);
    });
  }

  /**
   * Get the thumbnail image url from the backend
   * @param imageId id of the image we're trying to retrieve
   * @param callback Callback function once the values are retrieved
   */
  getThumbnailImage(imageId: string, callback: (string) => void) {
    this.imageApiWrapper.getThumbnailImageUrl(imageId, thumbnailImageUrl => {
      callback(thumbnailImageUrl);
    })
  }
}
