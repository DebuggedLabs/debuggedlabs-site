
import { TeamProfile } from '../definitions/teamProfile'
import { TeamEntry } from './teamEntry';
import { HttpClient } from '@angular/common/http';
import { ApiWrapper } from './api-wrapper-base';

export class AuthorApiWrapper extends ApiWrapper {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  /**
   * Get single author from the back-end
   * @param teamProfileId Profile ID of the user to retrieve
   * @param serviceFunction The service function to pass the result to (as a parameter)
   */
  getSingleAuthorProfile(teamProfileId: number, serviceFunction: (TeamProfile) => void) {
    const teamsUri: string = this.teamsUrl + teamProfileId;
     this.httpClient.get<TeamEntry>(teamsUri)
      .subscribe(
        (data: TeamEntry) => this.handleAuthorProfileRequest(data, teamProfileId, serviceFunction),
        error => this.handleError(error, `getSingleAuthorProfile teamProfileId=${teamProfileId}`).bind(this)
      );
  }

  /**
   * Handle the initial GET request's data
   * @param data Data from the initial GET request
   * @param teamProfileId Profile ID of the user to retrieve
   * @param serviceFunction The service function to pass the result to (as a parameter)
   */
  private handleAuthorProfileRequest(data: TeamEntry, teamProfileId: number, serviceFunction: (TeamProfile) => void) {
    const usersUri: string = this.usersUrl + data.profile;

    this.httpClient.get(usersUri)
      .subscribe(
        userProfileData => {
          serviceFunction({
            name: (userProfileData as any).data.first_name + " " + (userProfileData as any).last_name,
            id: teamProfileId + "",
            profilePageUrl: data.userid,
            position: data.position,
            bio: data.bio,
            bioShort: data.bio_short,
            imageUrl: this.imageDetailUrl + data.image,
            twitterHandle: data.twitter_handle,
            email: (userProfileData as any).email
          });
        },
        error => this.handleError(error, `handleAuthorProfileRequest data=${data} teamProfileId=${teamProfileId}`).bind(this));
  }
}
