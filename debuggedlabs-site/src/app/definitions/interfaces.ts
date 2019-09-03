// for handling the various kinds of posts pulled from the backend
export interface Post {
    id: string;                                         // to query from the database
    title: string;                                      // post title
    publishedDate: Date;                                // published date
    teaser: string;                                     // teaser blurbs to show on the lists pages
    featuredArtURL: string;                             // for art (animated or still) to go alongside content
    additionalArtURLS: string[];                        // for additional art links that should be displayed throughout the content
    content: any;                                       // the content to display or play
    socialMediaLinks?: { [platform: string]: string }   // for linking social media links
}