import { Post } from './interfaces';

export class PodcastPost implements Post {

    id: string;
    title: string;    
    publishedDate: Date;
    teaser: string;
    featuredArtURL: string;
    additionalArtURLS: string[];
    socialMediaLinks?: { [platform: string]: string; };

    // podcast-specific fields
    content: string;  // to store url of podcast

    constructor() { }
}