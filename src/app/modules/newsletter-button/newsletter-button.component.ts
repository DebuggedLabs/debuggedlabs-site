import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsletterService } from 'src/app/services/newsletter.service';
import { WidthService } from 'src/app/services/width.service';
import { NewsletterComponent } from '../newsletter/newsletter.component';

@Component({
  selector: 'app-newsletter-button',
  templateUrl: './newsletter-button.component.html',
  styleUrls: ['./newsletter-button.component.css']
})
export class NewsletterButtonComponent implements OnInit {

  @ViewChild('newsletterSignupModalInPost', { static: false }) newsletterSignupModal: NewsletterComponent

  constructor(private newsletterService: NewsletterService,
              private widthService: WidthService) { }

  ngOnInit(): void {
  }

  /**
   * Onclick function for signing up for the Debugged Labs newsletter
   */
  newsletterSignupOnClick() {
    this.newsletterService.updateShowNewsletterSignupWindowStatus(true);
  }

  /**
   * Returns whether this is a mobile site
   * @returns boolean indicating whether mobile
   */
  isMobile(): boolean {
    return this.widthService.isMobileOrNarrowView();
  }
}
