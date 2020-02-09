import { Injectable } from '@angular/core';

export enum PageId {
  Home = "home",
  Podcasts = "podcasts",
  Technology = "technology",
  About = "about"
}

@Injectable({
  providedIn: 'root'
})

export class PageDetailsService {

  constructor() { }

  private currentPageId: string = "home"

  /**
   * To update the current page
   * @param pageId PageId of the current page
   */
  public updateCurrentPageId(pageId: PageId) {
    this.currentPageId = pageId;
  }

  /**
   * Get current page id
   */
  public getCurrentPageId(): string {
    return this.currentPageId;
  }
}
