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
   */
  getAllTeamProfiles(callback: (teamProfiles: TeamProfile[]) => void) {
    this.authorApiWrapper.getAllAuthorProfiles((profiles: TeamProfile[]) => {
      callback(profiles);
    });
  }

  getSingleTeamProfile(teamProfileId: string, callback: (TeamProfile) => void) {
    this.authorApiWrapper.getSingleAuthorProfile(teamProfileId, (profile: TeamProfile[]) => {
      callback(profile);
    });
  }
}
