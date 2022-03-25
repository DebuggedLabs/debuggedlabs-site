import { Component, Input, OnInit } from '@angular/core';
import { PageId } from 'src/app/definitions/types';

@Component({
  selector: 'app-home-page-button',
  templateUrl: './home-page-button.component.html',
  styleUrls: ['./home-page-button.component.css']
})
export class HomePageButtonComponent implements OnInit {

  @Input() pageIdToReturnTo: PageId;

  constructor() { }

  ngOnInit(): void { }

  public getPageName(): string {
    return this.pageIdToReturnTo.toString();
  }

  public isHomePageSection(): boolean {
    return this.pageIdToReturnTo == undefined || this.pageIdToReturnTo == PageId.Home;
  }
}
