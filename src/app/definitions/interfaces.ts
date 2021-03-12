import { TeamProfile } from './teamProfile';

// for handling the various kinds of posts pulled from the backend
export interface Post {
    id: string;                                         // to query from the database
    title: string;                                      // post title
    authors: TeamProfile[];                             // authors of the piece
    publishedDate: Date;                                // published date
    modifiedDate?: Date;                                // modified date
    topic: string;                                      // topic of the post
    teaser: string;                                     // teaser blurbs to show on the lists pages
    thumbnailArtUrl?: string;                           // for thumbnail of the post
    featuredArtURL: string;                             // for art (animated or still) to go alongside content
    featuredArtAlt: string;                             // alt for the featured art
    additionalArtURLs: string[];                        // for additional art links that should be displayed throughout the content
    additionalArtAlts: string[];                        // alts for each of the additional arts
    content: string;                                    // the content to display or play
    socialMediaLinks?: { [platform: string]: string }   // for linking social media links
    shouldShowModifiedDate: boolean;                    // boolean indicating if should show modified date in the post
}
