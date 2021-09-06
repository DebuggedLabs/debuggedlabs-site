import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterButtonComponent } from './newsletter-button.component';

describe('NewsletterButtonComponent', () => {
  let component: NewsletterButtonComponent;
  let fixture: ComponentFixture<NewsletterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
