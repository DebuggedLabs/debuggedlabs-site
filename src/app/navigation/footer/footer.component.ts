import { Component, OnInit } from '@angular/core';
import { PageDetailsService, PageId } from 'src/app/services/page-details.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private pageDetailService: PageDetailsService) { }

  ngOnInit() {
  }

  /**
   * Get subheader class name based on the current page we're on
   */
  getSubheaderClassName(): string {
    var className = "footer-subhead";
    const pageId = this.pageDetailService.getCurrentPageId();
    if (pageId === PageId.Podcasts) {
      return className + "-podcast";
    }
    else if (pageId === PageId.Science) {
      return className + "-science";
    }
    else if (pageId === PageId.Technology) {
      return className + "-technology";
    }
    else if (pageId === PageId.About) {
      return className + "-about";
    }
    return className;
  }

  /**
   * Get current year
   */
  getCurrentYear(): number {
    return (new Date()).getFullYear();
  }

}
