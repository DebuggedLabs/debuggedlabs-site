import { Component, OnInit, Input, Injectable, HostListener } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { navigationMenuItemInfo } from '../../definitions/types';
import { MenuConfig } from 'src/app/config/router-config';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })), 
      transition('void <=> *', animate(300)),
    ])
  ]
})

export class NavigationBarComponent implements OnInit {

  @Input() show: boolean = false;
  @Input() bannerElementId: string = "";
  @Input() sectionTitle: string = "";
  @Input() selectedColor: string = "";

  public heightCutOff: number = -1;

  constructor() { }

  ngOnInit() {
    this.heightCutOff = this.bannerElementId != '' ? 227.45 : this.heightCutOff;
  }

  @HostListener('window:scroll') onScroll() {
    if (window.pageYOffset > this.heightCutOff) {
      this.show = true;
    }
    else if (window.pageYOffset <= this.heightCutOff) {
      this.show = false;
    }
  }

  setClasses() {
    return {
      'sticky': this.show,     
      'dbl-background': true,
      'container': true,
      'navigation-menu-div': true 
    }
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
