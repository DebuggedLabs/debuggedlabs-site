import { TextPost } from '../definitions/textpost';
import { TeamProfileData } from '../config/profiles-config';

const today = new Date();
const yesterday = new Date();
const before = new Date();

var data = [
    {
        id: "string1",
        title: "What does the fox really say?",
        authors: TeamProfileData,
        publishedDate: today,
        topic: "Technology",
        teaser: "It's time to finally unveil the secret behind the mysterious mammal",
        featuredArtURL: "http://hdwpro.com/wp-content/uploads/2017/01/3D-Cool-Image.jpg",
        featuredArtAlt: "A fox",
        additionalArtURLs: [],
        additionalArtAlts: [],
        content: "/posts/string1"
    },

    {
        id: "string2",
        title: "Say goodbye to trains",
        authors: TeamProfileData,
        publishedDate: yesterday,
        topic: "Ethics",
        teaser: "Coronavirus has all but ensured these beautiful contraptions will go away.",
      featuredArtURL: "https://hips.hearstapps.com/pop.h-cdn.co/assets/cm/15/05/54ca9c8cbd1bb_-_monstertrain-470-0210.jpg?fill=320:234&resize=480:*",
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
    },
    {
        id: "string4",
        title: "Textpost 4",
        authors: TeamProfileData,
        publishedDate: before,
        topic: "Technology",
        teaser: "Teaser for this awesome post 4",
        featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
        featuredArtAlt: "I still like trains",
        additionalArtURLs: [],
        additionalArtAlts: [],
        content: "/posts/string4"
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
