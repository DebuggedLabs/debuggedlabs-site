import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PodcastPostPageComponent } from './podcast-post-page.component';

describe('PodcastPostPageComponent', () => {
  let component: PodcastPostPageComponent;
  let fixture: ComponentFixture<PodcastPostPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastPostPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
