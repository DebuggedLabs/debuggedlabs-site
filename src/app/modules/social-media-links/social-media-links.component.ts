import { Component, OnInit } from '@angular/core';
import { SocialMediaLinks, SocialMediaPlatform } from 'src/app/config/social-media-config';

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrls: ['./social-media-links.component.css']
})
export class SocialMediaLinksComponent implements OnInit {

  facebookLink: string;
  twitterLink: string;
  instagramLink: string;
  rssLink: string;

  constructor() { 
    this.facebookLink = SocialMediaLinks[SocialMediaPlatform.Facebook];
    this.twitterLink = SocialMediaLinks[SocialMediaPlatform.Twitter];
    this.instagramLink = SocialMediaLinks[SocialMediaPlatform.Instagram];
    this.rssLink = SocialMediaLinks[SocialMediaPlatform.RSS];
  }

  ngOnInit() {
  }

}
