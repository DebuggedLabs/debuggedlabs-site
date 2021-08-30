import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private showNewsletterSignupWindow: boolean;

  constructor() {
    this.showNewsletterSignupWindow = false;
  }

  /**
   * To update whether to show the newsletter signup window
   * @param showNewsletterSignupWindow boolean indicating whether to show the newsletter window
   */
  updateShowNewsletterSignupWindowStatus(showNewsletterSignupWindow: boolean) {
    this.showNewsletterSignupWindow = showNewsletterSignupWindow;
  }

  /**
   * Returns whether to show the newsletter signup window
   * @returns boolean indicating whether to show newsletter signup window
   */
  shouldShowNewsletterSignupWindow(): boolean {
    return this.showNewsletterSignupWindow;
  }
}
