import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewsletterService } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  @ViewChild('newsletterModal', { static: false }) newsletterModal: ElementRef;

  constructor(private newsletterService: NewsletterService) {  }

  ngOnInit(): void {
  }

  isNewsletterSelected(): boolean {
    console.log(this.newsletterService.shouldShowNewsletterSignupWindow());
    return this.newsletterService.shouldShowNewsletterSignupWindow();
  }

  closeModal() {
    console.log("Closing newsletter signup modal");
    this.newsletterService.updateShowNewsletterSignupWindowStatus(false);
  }
}
