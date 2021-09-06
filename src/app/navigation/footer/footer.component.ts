import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsletterComponent } from 'src/app/modules/newsletter/newsletter.component';
import { NewsletterService } from 'src/app/services/newsletter.service';
import { PageDetailsService, PageId } from 'src/app/services/page-details.service';
import { WidthService } from 'src/app/services/width.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChild('newsletterSignupModal', { static: false }) newsletterSignupModal: NewsletterComponent

  constructor(private pageDetailService: PageDetailsService,
              private newsletterService: NewsletterService,
              private widthService: WidthService) { }

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
   * Returns whether this is a mobile site
   * @returns boolean indicating whether mobile
   */
  isMobile(): boolean {
    return this.widthService.isMobileOrNarrowView();
  }

  /**
   * Get current year
   */
  getCurrentYear(): number {
    return (new Date()).getFullYear();
  }

  /**
   * Onclick function for signing up for the Debugged Labs newsletter
   */
  newsletterSignupOnClick() {
    this.newsletterService.updateShowNewsletterSignupWindowStatus(true);
  }
}
