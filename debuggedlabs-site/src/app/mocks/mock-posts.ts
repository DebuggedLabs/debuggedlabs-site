import { TextPost } from '../definitions/textpost';
import { TeamProfileData } from '../config/profiles-config';

const today = new Date();
const yesterday = new Date();
const before = new Date();

var data = [
    {
        id: "string1",
        title: "What does the fox say?",
        authors: TeamProfileData,
        publishedDate: today,
        topic: "Technology",
        teaser: "Unveiling the secret behind the mysterious mammal",
        featuredArtURL: "http://hdwpro.com/wp-content/uploads/2017/01/3D-Cool-Image.jpg",
        featuredArtAlt: "A fox",
        additionalArtURLs: [],
        additionalArtAlts: [],
        content: "/posts/string1"
    },

    {
        id: "string2",
        title: "Textpost 2",
        authors: TeamProfileData,
        publishedDate: yesterday,
        topic: "Ethics",
        teaser: "Teaser for this awesome post 2",
        featuredArtURL: "https://i.pinimg.com/originals/46/96/06/46960678b500d0add4434929a15b385c.jpg",
        featuredArtAlt: "I like trains a lot",
        additionalArtURLs: [],
        additionalArtAlts: [],
        content: "/posts/string2"
    },

    {
        id: "string3",
        title: "Textpost 3",
        authors: TeamProfileData,
        publishedDate: before,
        topic: "Technology",
        teaser: "Teaser for this awesome post 3",
        featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
        featuredArtAlt: "I still like trains",
        additionalArtURLs: [],
        additionalArtAlts: [],
        content: "/posts/string3"
    }
];

export var POSTS: TextPost[] = [];

data.forEach(elem => {
    POSTS.push(new TextPost(
        elem.id,
        elem.title,
        elem.authors,
        elem.publishedDate,
        elem.topic,
        elem.teaser,
        elem.featuredArtURL,
        elem.featuredArtAlt,
        elem.additionalArtURLs,
        elem.additionalArtAlts,
        elem.content
    ));
});