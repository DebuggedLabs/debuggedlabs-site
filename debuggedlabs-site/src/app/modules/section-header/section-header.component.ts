import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-header', 
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

  @Input() sectionTitle: string;
  @Input() iconUrl: string;
  @Input() backgroundColor: string;

  public backgroundColorStyle: { "background-color" : string };

  constructor() { }

  ngOnInit() {
    console.log(this.backgroundColor);
    this.backgroundColorStyle = { "background-color": this.backgroundColor };
    this.sectionTitle = this.sectionTitle.toUpperCase();
  }
}
