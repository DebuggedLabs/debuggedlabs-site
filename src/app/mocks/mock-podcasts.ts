import { PodcastPost } from '../definitions/podcast';
import { TeamProfileData } from '../config/profiles-config';

const today = new Date();
const yesterday = new Date();
const before = new Date();

const data = [
    {
        id: "string1",
        title: "What is a network?",
        authors: TeamProfileData,
        publishedDate: today,
        topic: "Bits and Pieces",
        teaser: "Reading is for schmucks. Listen to this epic podcast 1!",
    featuredArtURL: "https://i1.ytimg.com/vi/hHkKJfcBXcw/hqdefault.jpg",
        featuredArtAlt: "I like trains",
        additionalArtURLs: [],
        additionalArtAlts: [],
        content: "https://soundcloud.com/dailybruin/no-offense-but-the-admissions-scandals"
    },

    {
        id: "string2",
        title: "I like trains. You should too.",
        authors: TeamProfileData,
        publishedDate: yesterday,
        topic: "Technology podcast",
        teaser: "Reading is for schmucks. Listen to this epic podcast 2!",
      featuredArtURL: "https://pm1.narvii.com/6483/a66a250293e5978ddb63e43e3ec39fb62effbd9b_00.jpg",
        featuredArtAlt: "I like trains",
        additionalArtURLs: [],
        additionalArtAlts: [],
        content: "https://soundcloud.com/dailybruin/no-offense-but-usac-elections-1"
    },

    {
        id: "string3",
        title: "Is technology fundamentally racist?",
        authors: TeamProfileData,
        publishedDate: before,
        topic: "Bits and Pieces",
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
