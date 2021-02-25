import { Injectable } from '@angular/core';
import { TeamProfile } from '../definitions/teamProfile';
import { AuthorApiWrapper } from '../api-wrappers/author-api-wrapper'
import { HttpClient } from '@angular/common/http';
import { ColumnPostCardComponent } from '../modules/post-card/column-post-card/column-post-card.component';

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
   * Get multiple team profiles, given a list of team ids
   * @param teamProfileIds ids to query on the backend
   * @param callback callback to return the team profile to
   */
  getMultipleTeamProfiles(teamProfileIds: string[], callback: (profiles: TeamProfile[]) => void) {
    let count = 0;
    let max = teamProfileIds.length;
    let profilesList: TeamProfile[] = [];
    this.getMultipleAuthorsRecursive(teamProfileIds, profilesList, count, max, teamProfiles => {
      callback(teamProfiles);
    });
  }

  /**
   * Recursive function to get multiple team profiles, given a list of team ids
   * @param teamProfileIds ids to query on the backend
   * @param profiles pass in array of team profiles
   * @param count current index in the list of ids
   * @param max max index in the list of ids
   * @param callback callback to return the team profile to
   */
  private getMultipleAuthorsRecursive(teamProfileIds: string[], profiles: TeamProfile[], count: number, max: number, callback: (profiles: TeamProfile[]) => void) {

    // if base case hasn't been met, get the current profile and then continue with recursion
    if (count < max) {
      this.getSingleTeamProfile(teamProfileIds[count], profile => {
        profiles.push(profile);
        this.getMultipleAuthorsRecursive(teamProfileIds, profiles, count + 1, max, nextProfiles => {
          profiles.concat(nextProfiles);
          callback(profiles);
        });
      });
    }
    else {
      callback(profiles);
    }
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
