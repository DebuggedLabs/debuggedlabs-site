import { Component, OnInit } from '@angular/core';
import { MenuConfig } from 'src/app/config/router-config';
import { ShowHamburgerMenuService } from 'src/app/services/show-hamburger-menu-service.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private showHamburgerMenuService: ShowHamburgerMenuService) { }

  ngOnInit() {
  }

  /**
   * Get menu items for the banner
   */
  getMenuItems() {
    var menuItems = [];
    MenuConfig.forEach(element => {
      menuItems.push({
        title: element.data.name,
        routerLink: '/' + element.path,
      });
    });
    return menuItems;
  }

  shouldShowHamburgerMenu(): boolean {
    return this.showHamburgerMenuService.shouldShowHamburgerMenuIcon();
  }

}
