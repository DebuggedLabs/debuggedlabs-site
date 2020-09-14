
import { TeamProfile } from '../definitions/teamProfile'
import { TeamEntry } from './backend-types/teamEntry';
import { HttpClient } from '@angular/common/http';
import { ApiWrapper } from './api-wrapper-base';
import { KeyValue } from '@angular/common';

export class AuthorApiWrapper extends ApiWrapper {

  private authorProfileCache: Map<string, KeyValue<TeamProfile, Date>>;

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.authorProfileCache = new Map<string, KeyValue<TeamProfile, Date>>();
  }

  /**
   * Get all authors/team profiles from back-end
   * @param serviceFunction The service function to pass the result to (as a parameter)
   */
  getAllAuthorProfiles(serviceFunction: (teamProfiles: TeamProfile[]) => void)
  {
    const teamsUri: string = this.teamsUrl;
    // update the the author profile cache
    this.httpClient.get(teamsUri)
      .subscribe(
        data => {
          let teamEntries: TeamEntry[] = (data as any).data;
          console.log(teamEntries);

          // aggregate the author profiles
          let authorProfiles: TeamProfile[] = [];
          teamEntries.forEach(teamEntry => {
            authorProfiles.push(this.handleAuthorProfileRequest(teamEntry));
          });
          serviceFunction(authorProfiles);
        },
        error => this.handleError(error, `getAllAuthorProfiles`).bind(this)
      );
  }

  /**
   * Get single author from the back-end
   * @param teamProfileId Profile ID of the user to retrieve
   * @param serviceFunction The service function to pass the result to (as a parameter)
   */
  getSingleAuthorProfile(teamProfileId: string, serviceFunction: (TeamProfile) => void) {
    // returned the cached value if we already retrieved it before
    if (this.isProfileInCache(teamProfileId)) {
      return this.authorProfileCache.get(teamProfileId).key;
    }

    const teamsUri: string = this.teamsUrl + "/" + teamProfileId;
     this.httpClient.get(teamsUri)
      .subscribe(
        data => {
          let authorProfile: TeamProfile = this.handleAuthorProfileRequest((data as any).data);
          serviceFunction(authorProfile);
        },
        error => this.handleError(error, `getSingleAuthorProfile teamProfileId=${teamProfileId}`).bind(this)
      );
  }

  /**
   * Handle the initial GET request's data
   * @param data Data from the initial GET request
   * @param serviceFunction The service function to pass the result to (as a parameter)
   */
  private handleAuthorProfileRequest(data: TeamEntry): TeamProfile {
    let authorProfile: TeamProfile =
    {
      name: data.name,
      id: data.id,
      profilePageUrl: data.userid,
      position: data.position,
      bio: data.bio,
      bioShort: data.bio_short,
      imageId: data.image + "",
      twitterHandle: data.twitter_handle,
      email: data.email,
    };

    // add to our cache before executing the callback
    let keyValuePair: KeyValue<TeamProfile, Date> = {
      key: authorProfile,
      value: new Date()
    };

    console.log(authorProfile);
    this.authorProfileCache.set(data.id, keyValuePair);
    return authorProfile;
  }

  /**
   * Returns whether the profile is in the session cache (or stale as of 2 hours)
   * @param teamProfileId The team profile ID being queried
   */
  private isProfileInCache(teamProfileId: string): boolean {
    // if cache has the team profile ID, check to see if it was updated within the last 4 hours
    if (this.authorProfileCache.has(teamProfileId)) {
      let cacheEntry: KeyValue<TeamProfile, Date> = this.authorProfileCache.get(teamProfileId);
      let difference: number = (new Date()).getHours() - cacheEntry.value.getHours();
      return difference >= 4;
    }

    return false;
  }
}