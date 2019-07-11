import { Component, OnInit } from '@angular/core';
import { menuConfig } from 'src/app/config/router-config';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getMenuItems() {
    var menuItems = [];
    menuConfig.forEach(element => {
      menuItems.push({
        title: element.data.name,
        routerLink: '/' + element.path,
      });
    });
    return menuItems;
  }

}
