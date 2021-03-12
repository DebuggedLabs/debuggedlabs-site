
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

export class ApiWrapper {

  baseUrl = "https://cms.debuggedlabs.com/debugged-labs/"
  teamsUrl = this.baseUrl + "items/team";
  postUrl = this.baseUrl + "items/posts";
  usersUrl = this.baseUrl + "users/";
  imageDetailUrl = this.baseUrl + "files/";

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
