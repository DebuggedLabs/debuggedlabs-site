import { Component, OnInit, Input } from '@angular/core';
import { navigationMenuItemInfo } from 'src/app/definitions/types';
import { ShowHamburgerMenuServiceService } from 'src/app/services/show-hamburger-menu-service.service';
import { MenuConfig } from 'src/app/config/router-config';

@Component({
  selector: 'app-hamburger-menu-items',
  templateUrl: './hamburger-menu-items.component.html',
  styleUrls: ['./hamburger-menu-items.component.css']
})
export class HamburgerMenuItemsComponent implements OnInit {

  @Input() sectionTitle: string = "";

  constructor(private showMenuService: ShowHamburgerMenuServiceService) { }

  ngOnInit() {
  }

  showOrHideItems() {
    return this.showMenuService.shouldShowHamburgerMenuItemsStatus();
  }

  getMenuItems(): navigationMenuItemInfo[] {

    var menuItems: navigationMenuItemInfo[] = [];

    // get menu item information from routerConfig
    MenuConfig.forEach(element => {
      menuItems.push({
        title: element.data.name,
        routerLink: '/' + element.path,
        inactive: this.sectionTitle === element.path,
        selectedColor: element.data.backgroundColor
      });
    });

    return menuItems
  }

}
