import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowHamburgerMenuService {

  private showHamburgerMenuItems: boolean;
  private showHamburgerMenu: boolean;

  constructor() { 
    this.showHamburgerMenuItems = false;
    this.showHamburgerMenu = false;
  }

  updateShowHamburgerMenu(showMenuItems: boolean) {
    this.showHamburgerMenuItems = showMenuItems;
  }

  updateShowHambuurgerIconStatus(showMenu: boolean) {
    this.showHamburgerMenu = showMenu;
  }

  shouldShowHamburgerMenuAndItems(): boolean{
    return this.showHamburgerMenu && this.showHamburgerMenuItems;
  }

  shouldShowHamburgerMenuIcon(): boolean {
    return this.showHamburgerMenu;
  }
}
