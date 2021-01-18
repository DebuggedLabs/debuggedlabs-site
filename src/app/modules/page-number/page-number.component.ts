import { Component, Input, OnInit } from '@angular/core';
import { PageDetailsService } from 'src/app/services/page-details.service';

export type PageNumberUrl = {
  pageNumber: number;
  url: string;
<<<<<<< HEAD
  isSelected: boolean;
=======
>>>>>>> 7bc0f1b (Adding page number module)
}

@Component({
  selector: 'app-page-number',
  templateUrl: './page-number.component.html',
  styleUrls: ['./page-number.component.css']
})
export class PageNumberComponent implements OnInit {

  // inputs
  @Input() pageNumber: number;
  @Input() totalNumberOfPages: number;

  // to determine which buttons to show alongside the page numbers
  public shouldShowLeftArrow: boolean = false;
  public shouldShowRightArrow: boolean = false;
  public pageMinUrl: string = "";
  public pageMaxUrl: string = "";

  // to determine the page numbers to show
  public pageNumberSequence: PageNumberUrl[] = [];
  NUMBER_OF_PAGES_TO_SHOW: number = 3;

  constructor(private pageDetailService: PageDetailsService) { }

  ngOnInit() {
    this.pageNumberSequence = this.getPageNumberSequence();
    this.pageMinUrl = this.getPageNumberUrl(1);
    this.pageMaxUrl = this.getPageNumberUrl(this.totalNumberOfPages);
  }

  /**
   * Get list of page numbers adjacent to the current page number
   */
  getPageNumberSequence(): PageNumberUrl[] {
    let sequence: PageNumberUrl[] = [];

    // if only 1 page, only show one page
    if (this.totalNumberOfPages <= 1) {
      sequence.push({
        pageNumber: this.pageNumber,
        url: this.getPageNumberUrl(this.pageNumber),
        isSelected: true
      });
      this.shouldShowLeftArrow = false;
      this.shouldShowRightArrow = false;
    }
    else {
      let startingNumber = this.pageNumber;

      // determine start for page number sequence
      if (this.pageNumber > 1)
      {
        let difference = Math.floor(this.NUMBER_OF_PAGES_TO_SHOW/2);
        startingNumber = this.pageNumber - difference > 0 ?
          this.pageNumber - difference :
          this.pageNumber - 1;

        // show left arrow if sequence starts at a number greater than 1
        this.shouldShowLeftArrow = startingNumber > 1;
      }

      let sequenceLength = Math.min(this.NUMBER_OF_PAGES_TO_SHOW - 1, this.totalNumberOfPages);
      let endingNumber = Math.min(startingNumber + sequenceLength, this.totalNumberOfPages);

      // show right arrow if sequence ends at a number less than total number of pages
      this.shouldShowRightArrow = endingNumber < this.totalNumberOfPages;

      // create the sequence
      for (let i = startingNumber; i <= endingNumber; i++)
      {
        sequence.push({
          pageNumber: i,
          url: this.getPageNumberUrl(i),
          isSelected: i == this.pageNumber
        });
      }
    }

    return sequence;
  }

  /**
   * Get page number Url
   * @param pageNumber page number whose page to link to
   */
  getPageNumberUrl(pageNumber: number): string {
    let pageUrl = "/" + this.pageDetailService.getCurrentPageId() + "/page/" + pageNumber;
    return pageUrl;
  }

}
