import { TextPost } from '../definitions/textpost';

const today = new Date();
const yesterday = new Date();
const before = new Date();

var data = [
    {
        id: "string1",
        title: "Podcast 1",
        bylines: ["Keshav Tadimeti", "Shawn Barman"],
        authorPages: ["/author/keshav_tadimeti", "author/shawn_barman"],
        publishedDate: today,
        topic: "Technology",
        teaser: "Teaser for this awesome post 1",
        featuredArtURL: "https://i.kym-cdn.com/entries/icons/facebook/000/004/795/I-LIKE-TRAINS.jpg",
        featuredArtAlt: "I like trains",
        additionalArtURLs: [],
        additionalArtAlts: [],
        content: "https://soundcloud.com/dailybruin/no-offense-but-the-admissions-scandals"
    },

    {
        id: "string2",
        title: "Podcast 2",
        bylines: ["Keshav Tadimeti", "Shawn Barman"],
        authorPages: ["/author/keshav_tadimeti", "author/shawn_barman"],
        publishedDate: yesterday,
        topic: "Ethics",
        teaser: "Teaser for this awesome post 2",
        featuredArtURL: "https://i.pinimg.com/originals/46/96/06/46960678b500d0add4434929a15b385c.jpg",
        featuredArtAlt: "I like trains a lot",
        additionalArtURLs: [],
        additionalArtAlts: [],
        content: "https://soundcloud.com/dailybruin/no-offense-but-usac-elections-1"
    },

    {
        id: "string3",
        title: "Podcast 3",
        bylines: ["Keshav Tadimeti"],
        authorPages: ["/author/keshav_tadimeti"],
        publishedDate: before,
        topic: "Technology",
        teaser: "Teaser for this awesome post 3",
        featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
        featuredArtAlt: "I still like trains",
        additionalArtURLs: [],
        additionalArtAlts: [],
        content: "https://soundcloud.com/dailybruin/in-the-know-quarters-dimes-and-semesters"
    }
];

export var POSTS: TextPost[] = [];

data.forEach(elem => {
    POSTS.push(new TextPost(
        elem.id,
        elem.title,
        elem.bylines,
        elem.authorPages,
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