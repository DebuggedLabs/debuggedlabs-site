import { Component, OnInit } from '@angular/core';
import { MenuConfig } from 'src/app/config/router-config';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

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

}
