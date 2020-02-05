import { Component, OnInit, Input } from '@angular/core';
import { ShowHamburgerMenuServiceService } from 'src/app/services/show-hamburger-menu-service.service';

@Component({
  selector: 'app-hamburger-menu-icon',
  templateUrl: './hamburger-menu-icon.component.html',
  styleUrls: ['./hamburger-menu-icon.component.css']
})
export class HamburgerMenuIconComponent implements OnInit {

  private isCollapsed: boolean;

  constructor(private showMenuService: ShowHamburgerMenuServiceService) { 
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

  onClick() {
    this.isCollapsed = !this.isCollapsed;
    var showMenuItems: boolean = !this.isCollapsed;
    this.showMenuService.updateShowHamburgerMenuItemsStatus(showMenuItems);
  }

}
