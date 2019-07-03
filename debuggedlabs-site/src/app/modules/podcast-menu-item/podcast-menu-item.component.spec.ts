import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastMenuItemComponent } from './podcast-menu-item.component';

describe('PodcastMenuItemComponent', () => {
  let component: PodcastMenuItemComponent;
  let fixture: ComponentFixture<PodcastMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
