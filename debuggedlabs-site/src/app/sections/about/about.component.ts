import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.data
      .subscribe((data: { title: string }) => {
        this.titleService.setTitle(data.title);
      });
  }
}
