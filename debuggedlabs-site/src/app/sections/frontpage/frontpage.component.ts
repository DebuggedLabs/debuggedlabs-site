import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})

export class FrontpageComponent implements OnInit {

  constructor(private titleService: Title, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.data
      .subscribe((data: { title: string }) => {
        this.titleService.setTitle(data.title);
      });
  }
}
