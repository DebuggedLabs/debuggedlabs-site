import { Injectable } from '@angular/core';

export enum PageId {
  Home = "home",
  Podcasts = "podcasts",
  Technology = "technology",
  About = "about",
  Author = "author",
  PageNotFound = "page-not-found"
}

@Injectable({
  providedIn: 'root'
})

export class PageDetailsService {

  constructor() { }

  private currentPageId: string = "home"
  private bannerHeight: number = 133;
  private frontPageShowNavBar: boolean = false;

  /**
   * To update the current page
   * @param pageId PageId of the current page
   */
  public updateCurrentPageId(pageId: PageId) {
    this.currentPageId = pageId;
  }

  /**
   * Update the height of the banner
   * @param height new height of the banner
   */
  public updateBannerHeightValue(height: number) {
    this.bannerHeight = height;
  }

  /**
   * To update the status of whether the front page is showing and the navbar is displaying
   * @param show the state of the navbar
   */
  public updateFrontPageShowNavBarStatus(show: boolean) {
    this.frontPageShowNavBar = show;
  }

  /**
   * Get current page id
   */
  public getCurrentPageId(): string {
    return this.currentPageId;
  }

  /**
   * Return the banner height in pixels
   */
  public getBannerHeightPx(): number {
    return (this.frontPageShowNavBar && this.currentPageId === PageId.Home) ? 100 : this.bannerHeight;
  }
}
