import { Injectable } from '@angular/core';
import { TeamProfile } from '../definitions/teamProfile';
import { TeamProfileData } from '../config/profiles-config';

@Injectable({
  providedIn: 'root'
})
export class AuthorDetailService {

  constructor() { }

  /**
   * Get all team members' profiles
   */
  getAllTeamProfiles(): TeamProfile[] {
    return TeamProfileData;
  }

}
