import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class ScrollTopService {

  constructor(
    private router: Router,
  ) { }

  setScrollTop() {
    this.router.events.subscribe((event: NavigationEnd) => {
      window.scroll(0, 0);
    });
  }
}
