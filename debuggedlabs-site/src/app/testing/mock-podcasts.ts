import { PodcastPost } from '../definitions/podcast';
import { TeamProfileData } from '../config/profiles-config';

const today = new Date();
const yesterday = new Date();
const before = new Date();

const data = [
    {
        id: "string1",
        title: "Podcast 1",
        authors: TeamProfileData,
        publishedDate: today,
        topic: "Technology",
        teaser: "Reading is for schmucks. Listen to this epic podcast 1!",
        featuredArtURL: "https://i.kym-cdn.com/entries/icons/facebook/000/004/795/I-LIKE-TRAINS.jpg",
        featuredArtAlt: "I like trains",
        additionalArtURLs: [],
        additionalArtAlts: [],
        content: "https://soundcloud.com/dailybruin/no-offense-but-the-admissions-scandals"
    },

    {
        id: "string2",
        title: "Podcast 2",
        authors: TeamProfileData,
        publishedDate: yesterday,
        topic: "Technology",
        teaser: "Reading is for schmucks. Listen to this epic podcast 2!",
        featuredArtURL: "https://i.pinimg.com/originals/46/96/06/46960678b500d0add4434929a15b385c.jpg",
        featuredArtAlt: "I like trains",
        additionalArtURLs: [],
        additionalArtAlts: [],
        content: "https://soundcloud.com/dailybruin/no-offense-but-usac-elections-1"
    },

    {
        id: "string3",
        title: "Podcast 3",
        authors: TeamProfileData,
        publishedDate: before,
        topic: "Genetics",
        teaser: "Reading is for schmucks. Listen to this epic podcast 3!",
        featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
        featuredArtAlt: "I like trains",
        additionalArtURLs: [],
        additionalArtAlts: [],
        content: "https://soundcloud.com/dailybruin/in-the-know-quarters-dimes-and-semesters"
    }
];

export var PODCASTS: PodcastPost[] = []; 

data.forEach(elem => {
    PODCASTS.push(new PodcastPost(
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