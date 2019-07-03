import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastsListComponent } from './podcasts-list.component';

describe('PodcastsListComponent', () => {
  let component: PodcastsListComponent;
  let fixture: ComponentFixture<PodcastsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
