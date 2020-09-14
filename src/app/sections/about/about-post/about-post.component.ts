import { Component, OnInit, Input, HostListener } from '@angular/core';
import { TeamProfile } from 'src/app/definitions/teamProfile';
import { ImageDetailService } from 'src/app/services/image-detail.service';

@Component({
  selector: 'app-about-post',
  templateUrl: './about-post.component.html',
  styleUrls: ['./about-post.component.css']
})
export class AboutPostComponent implements OnInit {

  @Input() profile: TeamProfile;
  imageUrl: string = "";

  private windowWidth: number;
  private widthCutOff: number = 952;

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.windowWidth = window.innerWidth;
  }

  constructor(private imageDetailService: ImageDetailService) { }

  ngOnInit() {
    this.imageDetailService.getFullImage(this.profile.imageId, imageUrl => {
      this.imageUrl = imageUrl;
    });
  }

  getImageInlineClass()
  {
    return this.windowWidth <= this.widthCutOff ? 'image-block': 'image-inline';
  }

  showAltTitle(): boolean{
    return this.windowWidth <= this.widthCutOff;
  }

  getImageWidth(): number {

    // fix firefox-related image bug
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      return this.windowWidth <= this.widthCutOff ? 60 : 100;
    }

    return this.windowWidth <= this.widthCutOff ? 60 : 25;
  }

  getImageUrl() {
  }

}
