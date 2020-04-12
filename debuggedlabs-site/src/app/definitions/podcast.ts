import { Post } from './interfaces';
import { TeamProfile } from './teamProfile';

export class PodcastPost implements Post {

    id: string;
    title: string;
    authors: TeamProfile[];
    publishedDate: Date;
    topic: string;
    teaser: string;
    featuredArtURL: string;
    featuredArtAlt: string;
    additionalArtURLs: string[];
    additionalArtAlts: string[];
    socialMediaLinks?: { [platform: string]: string; };

    // text-specific fields
    content: string;  // to store the text for the post

    /**
     * 
     * @param id post id
     * @param title title of the post
     * @param authors bylines for the piece
     * @param publishedDate published date of the post
     * @param teaser teaser text to display on posts-lists element
     * @param topic topic of the post
     * @param featuredArtURL HTTPS URL of the art to display
     * @param featuredArtAlt alt for the featured art
     * @param additionalArtURLs array to store any other art URLS to display
     * @param additionalArtAlts alts for the additional art
     * @param content HTML content of post
     * @param socialMediaLinks array to store social media links if needed
     */
    constructor(
        id: string,
        title: string,
        authors: TeamProfile[],
        publishedDate: Date,
        topic: string,
        teaser: string,
        featuredArtURL: string,
        featuredArtAlt: string,
        additionalArtURLs: string[],
        additionalArtAlts: string[],
        content: string,
        socialMediaLinks?: { [platform: string]: string; },
    ) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.publishedDate = publishedDate;
        this.topic = topic;
        this.teaser = teaser;
        this.featuredArtURL = featuredArtURL;
        this.featuredArtAlt = featuredArtAlt;
        this.additionalArtURLs = additionalArtURLs
        this.additionalArtAlts = additionalArtAlts;
        this.content = content;
        this.socialMediaLinks = socialMediaLinks;
    }
}