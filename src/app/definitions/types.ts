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
  Horizontal,
  Gallery,
  RowList
}

export enum PostListType {
  EList,
  ICList,
  GalleryList,
  RowList
}
