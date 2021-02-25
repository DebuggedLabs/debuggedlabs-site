
import { TeamProfile } from '../definitions/teamProfile'
import { TeamEntry } from './backend-types/teamEntry';
import { HttpClient } from '@angular/common/http';
import { ApiWrapper } from './api-wrapper-base';
import { KeyValue } from '@angular/common';
import { TeamProfiileCacheItem } from '../definitions/types';

export class AuthorApiWrapper extends ApiWrapper {

  private authorProfileCache: Map<string, KeyValue<TeamProfile, Date>>;
  private nameToIdMap: Map<string, string>;
  private TEAM_PROFILE_KEY = "team-profile-key-";

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.authorProfileCache = new Map<string, KeyValue<TeamProfile, Date>>();
    this.nameToIdMap = new Map<string, string>();
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

          // aggregate the author profiles
          let authorProfiles: TeamProfile[] = [];
          teamEntries.forEach(teamEntry => {
            let authorProfile: TeamProfile = this.handleAuthorProfileRequest(teamEntry);
            authorProfiles.push(authorProfile);
            this.updateTeamProfileCache(teamEntry.id, authorProfile);
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
      var teamProfileObject: TeamProfiileCacheItem = JSON.parse(localStorage.getItem(this.getTeamProfileCacheKey(teamProfileId)));
      serviceFunction(teamProfileObject.profile);
      return;
    }

    const teamsUri: string = this.teamsUrl + "/" + teamProfileId;
     this.httpClient.get(teamsUri)
      .subscribe(
        data => {
          let authorProfile: TeamProfile = this.handleAuthorProfileRequest((data as any).data);
          this.updateTeamProfileCache(teamProfileId, authorProfile);
          serviceFunction(authorProfile);
        },
        error => this.handleError(error, `getSingleAuthorProfile teamProfileId=${teamProfileId}`).bind(this)
      );
  }

  /**
   * Get single author from the back-end
   * @param teamProfileId Name of the author
   * @param serviceFunction The service function to pass the result to (as a parameter)
   */
  getSingleAuthorProfileFromName(name: string, serviceFunction: (TeamProfile) => void) {
    this.getTeamProfileIdFromAuthorName(name, profileId => {
      // pass back null if we can't get the profile ID
      if (profileId == null || profileId === '') {
        serviceFunction(null);
      }
      else {
        // otherwise, get details about the single author
        this.getSingleAuthorProfile(profileId, teamProfile => {
          serviceFunction(teamProfile);
        });
      }
    })
  }

  /**
   * Method to get the author if you have the author name
   * @param name Author name you're trying to query
   */
  private getTeamProfileIdFromAuthorName(name: string, callback: (string) => void) {

    if (!this.nameToIdMap.has(name)) {
      this.getAllAuthorProfiles(profiles => {
        // return null if can't find mapping even after refreshing our indexes
        if (!this.nameToIdMap.has(name)) {
          callback(null);
        }
        else {
          callback(this.nameToIdMap.get(name));
        }
      });
    }
    else {
      callback(this.nameToIdMap.get(name));
    }
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
      profilePageUrl: "author/" + data.userid,
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
    this.nameToIdMap.set(authorProfile.name.toLowerCase(), data.id);
    return authorProfile;
  }

  /**
   * Returns whether the original image is in caceh
   * @param teamProfileId TeamProfile ID that was queried
   * @param profile The profile retrieved from the backend
   */
  private updateTeamProfileCache(teamProfileId: string, profile: TeamProfile) {
    let currentDate = new Date();
    let cacheItem: TeamProfiileCacheItem = { profile: profile, date: currentDate };
    localStorage.setItem(this.getTeamProfileCacheKey(teamProfileId), JSON.stringify(cacheItem));
  }

  /**
   * Returns whether the profile is in the session cache (or stale as of 2 hours)
   * @param teamProfileId The team profile ID being queried
   */
  private isProfileInCache(teamProfileId: string): boolean {
    // if cache has the team profile ID, check to see if it was updated within the last 4 hours
    var cacheObject = localStorage.getItem(this.getTeamProfileCacheKey(teamProfileId));
    if (cacheObject != null) {
      let entryDate: Date = new Date(JSON.parse(cacheObject).date);
      let difference: number = (new Date()).getHours() - entryDate.getHours();
      return difference <= 4;
    }

    return false;
  }

  /**
   * Get team profile cache key for retrieval, setting
   * @param teamProfileId thumbnail for which we need to cache key
   */
  private getTeamProfileCacheKey(teamProfileId: string) {
    return this.TEAM_PROFILE_KEY + teamProfileId;
  }
}
