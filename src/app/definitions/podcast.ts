import { Post } from './interfaces';
import { TeamProfile } from './teamProfile';

export class PodcastPost implements Post {

    id: string;
    title: string;
    authors: TeamProfile[];
    publishedDate: Date;
    modifiedDate?: Date;
    topics: string[];
    pageSortTags: string[];
    teaser: string;
    thumbnailArtUrl?: string;
    featuredArtURL: string;
    featuredArtAlt: string;
    additionalArtURLs: string[];
    additionalArtAlts: string[];
    socialMediaLinks?: { [platform: string]: string; };
    shouldShowModifiedDate: boolean = false;

    // text-specific fields
    content: string;  // to store the link to the podcast

    /**
     *
     * @param id post id
     * @param title title of the post
     * @param authors bylines for the piece
     * @param publishedDate published date of the post
     * @param modifiedDate modified date of the post
     * @param teaser teaser text to display on posts-lists element
     * @param topics topics of the post
     * @param pageSortTags sort tags for post
     * @param thumbnailArtUrl URL of the thumbnail art to display
     * @param featuredArtURL HTTPS URL of the art to display
     * @param featuredArtAlt alt for the featured art
     * @param additionalArtURLs array to store any other art URLS to display
     * @param additionalArtAlts alts for the additional art
     * @param content HTML content of post
     * @param socialMediaLinks array to store social media links if needed
     * @param shouldShowModifiedDate boolean indicating if should show modified date
     */
    constructor(
        id: string,
        title: string,
        authors: TeamProfile[],
        publishedDate: Date,
        topics: string[],
        pageSortTags: string[],
        teaser: string,
        featuredArtURL: string,
        featuredArtAlt: string,
        additionalArtURLs: string[],
        additionalArtAlts: string[],
        content: string,
        socialMediaLinks?: { [platform: string]: string; },
        modifiedDate?: Date,
        thumbnailArtUrl?: string,
        shouldShowModifiedDate?: boolean
    ) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.publishedDate = publishedDate;
        this.modifiedDate = modifiedDate;
        this.topics = topics;
        this.pageSortTags = pageSortTags;
        this.teaser = teaser;
        this.thumbnailArtUrl = thumbnailArtUrl;
        this.featuredArtURL = featuredArtURL;
        this.featuredArtAlt = featuredArtAlt;
        this.additionalArtURLs = additionalArtURLs
        this.additionalArtAlts = additionalArtAlts;
        this.content = content;
        this.socialMediaLinks = socialMediaLinks;
        this.shouldShowModifiedDate = shouldShowModifiedDate != null && shouldShowModifiedDate != undefined ? shouldShowModifiedDate : false;
    }
}
