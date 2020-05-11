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
 * Types of post cards
 */
export enum PostCardType {
  Featured,
  Column,
  Horizontal
}

export enum PostListType {
  EList,
  ICList,
  GalleryList,
  RowList
}
