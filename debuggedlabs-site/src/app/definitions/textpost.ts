import { Post } from './interfaces';

export class TextPost implements Post {

    id: string;
    title: string;
    publishedDate: Date;
    teaser: string;
    featuredArtURL: string;
    additionalArtURLS: string[];
    socialMediaLinks?: { [platform: string]: string; };

    // text-specific fields
    content: string;  // to store the text for the post

    constructor() { }

}