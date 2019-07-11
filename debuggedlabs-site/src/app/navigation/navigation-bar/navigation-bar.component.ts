import { Component, OnInit, Input, Injectable, HostListener } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { navigationMenuItemInfo } from '../../config/types';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})

@Injectable({
  providedIn: 'root'
})

export class NavigationBarComponent implements OnInit {

  @Input() show: boolean = false;
  @Input() bannerElementId: string = "";
  @Input() sectionTitle: string = "";
  public heightCutOff: number = -1;

  constructor() { }

  ngOnInit() {
    this.heightCutOff = this.bannerElementId != '' ? 227.45 : this.heightCutOff;
    console.log(this.heightCutOff);
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
    console.log(this.sectionTitle === "podcasts");
    return [
      { title: 'Podcasts', routerLink: '/podcasts', inactive: this.sectionTitle === "podcasts"},
      { title: 'Technology', routerLink: '/technology', inactive: this.sectionTitle === "technology" },
      { title: 'About', routerLink: '/about', inactive: this.sectionTitle === "about" }];
  }
}
