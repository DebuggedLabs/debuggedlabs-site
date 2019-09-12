import { Post } from './interfaces';

export class PodcastPost implements Post {

    id: string;
    title: string;    
    publishedDate: Date;
    teaser: string;
    featuredArtURL: string;
    additionalArtURLs: string[];
    socialMediaLinks?: { [platform: string]: string; };

    // podcast-specific fields
    content: string;  // to store url of podcast

    /**
     * 
     * @param id post id
     * @param title title of the post
     * @param publishedDate published date of the post
     * @param teaser teaser text to display on posts-lists element
     * @param featuredArtURL HTTPS URL of the art to display
     * @param additionalArtURLs array to store any other art URLS to display
     * @param content HTML content of post
     * @param socialMediaLinks array to store social media links if needed
     */
    constructor(
        id: string,
        title: string,
        publishedDate: Date,
        teaser: string,
        featuredArtURL: string,
        additionalArtURLs: string[],
        content: string,
        socialMediaLinks?: { [platform: string]: string; },
        ) { 
            this.id = id;
            this.title = title;
            this.publishedDate = publishedDate;
            this.teaser = teaser;
            this.featuredArtURL = featuredArtURL;
            this.additionalArtURLs = additionalArtURLs
            this.content = content;
        }

    /**
     * Get post without HTML tags
     */
    getHTMLRemovedText(): string {

        // Create a new div element
        var temporaryElement = document.createElement("div");

        // Set the HTML content with the providen
        temporaryElement.innerHTML = this.content;

        // Retrieve the text property of the element (cross-browser support)
        return temporaryElement.textContent || temporaryElement.innerText || "";
    }
}