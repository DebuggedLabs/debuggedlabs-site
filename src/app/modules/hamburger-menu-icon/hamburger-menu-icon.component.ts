import { Component, OnInit, Input } from '@angular/core';
import { WidthService } from 'src/app/services/width.service';

@Component({
  selector: 'app-hamburger-menu-icon',
  templateUrl: './hamburger-menu-icon.component.html',
  styleUrls: ['./hamburger-menu-icon.component.css']
})
export class HamburgerMenuIconComponent implements OnInit {

  public isCollapsed: boolean = true;

  constructor(private showMenuService: WidthService) { }

  ngOnInit() {
  }

  onClick() {
    this.isCollapsed = !this.isCollapsed;
    var showMenuItems: boolean = !this.isCollapsed;
    this.showMenuService.updateShowHamburgerMenuStatus(showMenuItems);
  }

}
