import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowHamburgerMenuServiceService {

  private showHamburgerMenuItems: boolean;
  private showHamburgerMenu: boolean;

  constructor() { 
    this.showHamburgerMenuItems = false;
    this.showHamburgerMenu = false;
  }

  updateShowHamburgerMenuItemsStatus(showMenuItems: boolean) {
    this.showHamburgerMenuItems = showMenuItems;
  }

  updateShowHamburgerMenuStatus(showMenu: boolean) {
    this.showHamburgerMenu = showMenu;
  }

  shouldShowHamburgerMenuItemsStatus(): boolean{
    return this.showHamburgerMenu && this.showHamburgerMenuItems;
  }
}
