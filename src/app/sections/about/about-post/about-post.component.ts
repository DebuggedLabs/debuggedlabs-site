import { Component, OnInit, Input, HostListener } from '@angular/core';
import { TeamProfile } from 'src/app/definitions/teamProfile';

@Component({
  selector: 'app-about-post',
  templateUrl: './about-post.component.html',
  styleUrls: ['./about-post.component.css']
})
export class AboutPostComponent implements OnInit {

  @Input() profile: TeamProfile;
  private windowWidth: number;
  private widthCutOff: number = 952;

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.windowWidth = window.innerWidth;
  }
  
  constructor() { }

  ngOnInit() {
  }

  getImageInlineClass() 
  {
    return this.windowWidth <= this.widthCutOff ? 'image-block': 'image-inline';
  }

  showAltTitle(): boolean{
    return this.windowWidth <= this.widthCutOff;
  }

}
