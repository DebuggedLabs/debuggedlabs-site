import { Component, OnInit, Input, Injectable, HostListener } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { navigationMenuItemInfo } from '../../definitions/types';
import { MenuConfig } from 'src/app/config/router-config';
import { ShowHamburgerMenuServiceService } from 'src/app/services/show-hamburger-menu-service.service';

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
      state('noAnimate', style({
        opacity: 100
      }))
    ]),
  ]
})

export class NavigationBarComponent implements OnInit {

  @Input() show: boolean = false;
  @Input() bannerElementId: string = "";
  @Input() sectionTitle: string = "";
  @Input() selectedColor: string = "";

  public heightCutOff: number = -1;
  public isHamburgerMenu: boolean;
  private windowWidth: number;

  constructor(private hamburgerMenuShowService: ShowHamburgerMenuServiceService) { }

  ngOnInit() {
    this.heightCutOff = this.bannerElementId != '' ? 227.45 : this.heightCutOff;
    this.windowWidth = window.innerWidth;
    this.tryDisplayHamburgerMenu();
  }

/**
 * Listen in on scroll and resizing events
 */
  @HostListener('window:scroll') onScroll() {
    if (window.pageYOffset > 0)
    {
      if (window.pageYOffset > this.heightCutOff) {
        this.show = true;
      }
      else if (window.pageYOffset <= this.heightCutOff) {
        this.show = false;
      }
    }
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
      this.windowWidth = window.innerWidth;
      this.tryDisplayHamburgerMenu();
  }

/**
 * Set the CSS classes
 */
  setClasses() {
    return {
      'sticky': this.show,     
      'dbl-background': true,
      'container': true,
      'navigation-menu-div': true 
    }
  }

  /**
   * Get menu items for showing in the navbar
   */
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

/**
 * See if need to show the hamburger menu if the width is too small
 */
  tryDisplayHamburgerMenu() {
    var widthCutOff: number = 1030;
    if (this.windowWidth <= widthCutOff) {
      this.isHamburgerMenu = true;
    }
    else {
      this.isHamburgerMenu = false;

      // close hamburger menu items if not showing menu
      this.hamburgerMenuShowService.updateShowHamburgerMenuItemsStatus(false);
    }

    // update the show status
    this.hamburgerMenuShowService.updateShowHamburgerMenuStatus(this.isHamburgerMenu);
  }
}
