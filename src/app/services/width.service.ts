import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidthService {

  private showHamburgerMenuItems: boolean;
  private showHamburgerMenu: boolean;

  constructor() {
    this.showHamburgerMenuItems = false;
    this.showHamburgerMenu = false;
  }

  /**
   * To update whether to show the hamburger menu
   * @param showMenuItems boolean indicating whether to show the menu items
   */
  updateShowHamburgerMenuStatus(showMenuItems: boolean) {
    this.showHamburgerMenuItems = showMenuItems;
  }

  /**
   * To update whether the page is of a mobile or narrow view
   * @param showMenu boolean indicating whether to show the menu icon
   */
  updateIsMobileOrNarrowViewStatus(showMenu: boolean) {
    this.showHamburgerMenu = showMenu;
  }

  /**
   * To determine whether to show the hamburger menu and its items
   */
  shouldShowHamburgerMenuAndItems(): boolean{
    return this.showHamburgerMenu && this.showHamburgerMenuItems;
  }

  /**
   * To determine whether to show the hamburger menu icon
   */
    isMobileOrNarrowView(): boolean {
    return this.showHamburgerMenu;
  }
}
