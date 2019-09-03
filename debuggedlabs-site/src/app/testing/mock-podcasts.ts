import { PodcastPost } from '../definitions/podcast';

const today = new Date();
const yesterday = new Date();
const before = new Date();

export const PODCASTS: PodcastPost[] = [
    {
        id: "string1",
        title: "Podcast 1",
        publishedDate: today,
        teaser: "Reading is for schmucks. Listen to this epic podcast 1!",
        featuredArtURL: "https://i.kym-cdn.com/entries/icons/facebook/000/004/795/I-LIKE-TRAINS.jpg",
        additionalArtURLS: [],
        content: "https://soundcloud.com/dailybruin/no-offense-but-the-admissions-scandals"
    },

    {
        id: "string2",
        title: "Podcast 2",
        publishedDate: yesterday,
        teaser: "Reading is for schmucks. Listen to this epic podcast 2!",
        featuredArtURL: "https://i.pinimg.com/originals/46/96/06/46960678b500d0add4434929a15b385c.jpg",
        additionalArtURLS: [],
        content: "https://soundcloud.com/dailybruin/no-offense-but-usac-elections-1"
    },

    {
        id: "string3",
        title: "Podcast 3",
        publishedDate: before,
        teaser: "Reading is for schmucks. Listen to this epic podcast 3!",
        featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
        additionalArtURLS: [],
        content: "https://soundcloud.com/dailybruin/in-the-know-quarters-dimes-and-semesters"
    }
];