// for handling the about page content
export interface TeamProfile {
    name: string;                                       // Name of the team member
    id: string;                                         // Id to use for DB queries (to generate author pages)
    profilePageUrl: string;                             // Relative url to the team member's profile page
    position: string;                                   // Position of the team member
    bio: string;                                        // Bio text for the profile owner
    bioShort: string;                                   // Summary bio text, to show up as first sentence
    imageId: string;                                    // id of the user's image
    twitterHandle: string;                              // Twitter handle of the team member
    email: string;                                      // Email address of team member
}
