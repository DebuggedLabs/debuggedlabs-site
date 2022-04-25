
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

export class ApiWrapper {

  baseUrl = "https://directus-wxjzhobc4m6bo.azurewebsites.net/"
  teamsUrl = this.baseUrl + "items/team";
  postUrl = this.baseUrl + "items/posts";
  usersUrl = this.baseUrl + "users/";
  imageDetailUrl = this.baseUrl + "files/";
  imageDownloadUrl = this.baseUrl + "assets/";
  thumbnailUrlSuffix = "?key=thumbnail";

  constructor(private http: HttpClient) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError(error: any, operation = 'operation') {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    return null;
  }
}
