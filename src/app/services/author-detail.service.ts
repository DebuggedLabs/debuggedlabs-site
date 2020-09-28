import { Injectable } from '@angular/core';
import { TeamProfile } from '../definitions/teamProfile';
import { AuthorApiWrapper } from '../api-wrappers/author-api-wrapper'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorDetailService {

  private authorApiWrapper: AuthorApiWrapper;

  constructor(private http: HttpClient) {
    this.authorApiWrapper = new AuthorApiWrapper(http);
  }

  /**
   * Get all team members' profiles
   * @param callback Callback once the values are retrieved
   */
  getAllTeamProfiles(callback: (teamProfiles: TeamProfile[]) => void) {
    this.authorApiWrapper.getAllAuthorProfiles((profiles: TeamProfile[]) => {
      callback(profiles);
    });
  }

  /**
   * Get a single team member's profile
   * @param teamProfileId the team profile ID of the member
   * @param callback Callback once the values are retrieved
   */
  getSingleTeamProfile(teamProfileId: string, callback: (TeamProfile) => void) {
    this.authorApiWrapper.getSingleAuthorProfile(teamProfileId, (profile: TeamProfile[]) => {
      callback(profile);
    });
  }

  /**
   * Get a single team member's profile
   * @param teamProfileId the name of the team member
   * @param callback Callback once the values are retrieved
   */
  getSingleTeamProfileFromName(authorName: string, callback: (TeamProfile) => void) {
    this.authorApiWrapper.getSingleAuthorProfileFromName(authorName, (profile: TeamProfile[]) => {
      callback(profile);
    });
  }
}
