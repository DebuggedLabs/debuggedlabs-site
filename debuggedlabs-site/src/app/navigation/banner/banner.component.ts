import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MenuConfig } from 'src/app/config/router-config';
import { WidthService } from 'src/app/services/width.service';
import { PageDetailsService, PageId } from 'src/app/services/page-details.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @ViewChild('bannerId', { read: ElementRef, static: false }) elementView: ElementRef;

  /**
   * Constructor for BannerComponent
   * @param showHamburgerMenuService service dictating hamburger menu details
   */
  constructor(private showHamburgerMenuService: WidthService,
              private pageDetailService: PageDetailsService) 
  { }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.pageDetailService.updateBannerHeightValue(this.elementView.nativeElement.offsetHeight);
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

  /**
   * Return whether to show the hamburger menu on the banner
   */
  shouldShowHamburgerMenu(): boolean {
    return this.showHamburgerMenuService.  isMobileOrNarrowView();
  }

}
