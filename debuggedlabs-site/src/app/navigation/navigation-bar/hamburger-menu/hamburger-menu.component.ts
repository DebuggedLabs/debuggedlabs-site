import { Component, OnInit, Input } from '@angular/core';
import { navigationMenuItemInfo } from 'src/app/definitions/types';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent implements OnInit {

  @Input() menuItems: navigationMenuItemInfo[];
  public isCollapsed: boolean;

  constructor() { 
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

  onClick() {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
  }

}
