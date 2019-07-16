import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPodcastComponent } from './featured-podcast.component';

describe('FeaturedPodcastComponent', () => {
  let component: FeaturedPodcastComponent;
  let fixture: ComponentFixture<FeaturedPodcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedPodcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
