// for handling the various kinds of posts pulled from the backend
export interface Post {
    id: string;                                         // to query from the database
    title: string;                                      // post title
    bylines: string[];                                  // authors of the piece
    authorPages: string[];                              // links to the author pages
    publishedDate: Date;                                // published date
    topic: string;                                      // topic of the post
    teaser: string;                                     // teaser blurbs to show on the lists pages
    featuredArtURL: string;                             // for art (animated or still) to go alongside content
    featuredArtAlt: string;                             // alt for the featured art
    additionalArtURLs: string[];                        // for additional art links that should be displayed throughout the content
    additionalArtAlts: string[];                        // alts for each of the additional arts
    content: any;                                       // the content to display or play
    socialMediaLinks?: { [platform: string]: string }   // for linking social media links
}