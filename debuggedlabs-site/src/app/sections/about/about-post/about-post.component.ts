import { Component, OnInit, Input } from '@angular/core';
import { TeamProfile } from 'src/app/definitions/teamProfile';

@Component({
  selector: 'app-about-post',
  templateUrl: './about-post.component.html',
  styleUrls: ['./about-post.component.css']
})
export class AboutPostComponent implements OnInit {

  @Input() profile: TeamProfile;

  constructor() { }

  ngOnInit() {
  }

}
