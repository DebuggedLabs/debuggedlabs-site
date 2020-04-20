import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { navigationMenuItemInfo } from 'src/app/definitions/types';
import { WidthService } from 'src/app/services/width.service';
import { MenuConfig } from 'src/app/config/router-config';
import { PageDetailsService, PageId } from 'src/app/services/page-details.service';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent implements OnInit {

  public width: number = 0;
  
  /**
   * Constructor of HamburgerMenuItemsComponent
   * @param showMenuService service dictating whether to show the hamburger menu
   * @param pageDetailService service giving details about the page being displayed
   */
  constructor(private showMenuService: WidthService,
              private pageDetailService: PageDetailsService) { }

  ngOnInit() {
  }

  /**
   * Returns the statuus of the show service
   */
  showOrHideItems(): boolean {
    var shouldShow: boolean = this.showMenuService.shouldShowHamburgerMenuAndItems();
    if (shouldShow)
    {
      this.openMenu();
    }
    else {
      this.closeMenu();
    }
    return shouldShow;
  }

  /**
   * Invoke the opening navigation for the hamburger menu
   */
  openMenu() {
    this.width = 55;
  }

  closeMenu() {
    this.width = 0;
  } 

  /**
   * Get menu items for the hamburger menu
   */
  getMenuItems(): navigationMenuItemInfo[] {

    var menuItems: navigationMenuItemInfo[] = [];

    // add home component, different from other menus
    menuItems.push({
      title: 'Home',
      routerLink: '/',
      inactive: this.pageDetailService.getCurrentPageId() === PageId.Home,
      selectedColor: "#00ffff"
    });

    // get menu item information from routerConfig
    MenuConfig.forEach(element => {
      menuItems.push({
        title: element.data.name,
        routerLink: '/' + element.path,
        inactive: this.pageDetailService.getCurrentPageId() === element.path,
        selectedColor: element.data.backgroundColor
      });
    });

    return menuItems
  }

  /**
   * Get the margin-top pixel value for the menu, based on the current page Id
   */
  getMarginTop(): number {
    if (this.pageDetailService.getCurrentPageId() == PageId.Home) {
      return this.pageDetailService.getBannerHeightPx();
    }
    return 100;
  }

}
