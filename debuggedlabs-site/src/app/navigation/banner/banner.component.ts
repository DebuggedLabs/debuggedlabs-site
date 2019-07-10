import { Component, OnInit } from '@angular/core';

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
    return [
      { title: 'Podcasts', routerLink: '/podcasts' },
      { title: 'Technology', routerLink: '/technology' },
      { title: 'About', routerLink: '/about' }];
  }

}
