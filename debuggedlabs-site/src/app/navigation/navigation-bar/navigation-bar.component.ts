import { Component, OnInit, Inject, Injectable, HostListener } from '@angular/core';
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

  public show: boolean = false;
  public heightCutOff: number = 400;

  constructor() { }

  ngOnInit() {
    this.heightCutOff = document.getElementById('banner').offsetHeight * 2;
    console.log("Banner is this tall: ", this.heightCutOff);
  }

  @HostListener('window:scroll') onScroll() {
    console.log("Being called!")
    console.log(window.pageYOffset);
    if (window.pageYOffset > this.heightCutOff) {
      this.show = true;

    }
    else if (window.pageYOffset <= this.heightCutOff) {
      this.show = false;
    }
  }

}
