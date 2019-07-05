import { Component, OnInit, Input, Injectable, HostListener } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

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
  public heightCutOff: number = -1;

  constructor() { }

  ngOnInit() {
    this.heightCutOff = document.getElementById(this.bannerElementId).offsetHeight * 2;
  }

  @HostListener('window:scroll') onScroll() {
    if (window.pageYOffset > this.heightCutOff) {
      this.show = true;

    }
    else if (window.pageYOffset <= this.heightCutOff) {
      this.show = false;
    }
  }

}
