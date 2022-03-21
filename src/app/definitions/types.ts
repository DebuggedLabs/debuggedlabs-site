import { TeamProfile } from "./teamProfile"

/**
 * Navigation menu item information
 */
export type navigationMenuItemInfo = {
    title: string,
    routerLink: string,
    inactive: boolean,
    selectedColor: string
}

/**
 * Cache item to track string info
 */
export type StringDataCacheItem = {
  data: string;
  date: Date
}

/**
 * Cache item to track string info
 */
export type TeamProfiileCacheItem = {
  profile: TeamProfile;
  date: Date
}

/**
 * Types of post cards
 */
export enum PostCardType {
  Featured,
  Column,
  Horizontal,
  Gallery,
  RowList
}

export enum PostListType {
  CList,
  ICList,
  GalleryList,
  RowList
}

/**
 * Types of platforms
 */
export enum Platforms {
  Facebook = "facebook",
  Twitter = "twitter",
  Email = "email"
}
