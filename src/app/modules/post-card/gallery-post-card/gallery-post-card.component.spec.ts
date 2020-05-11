import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPostCardComponent } from './gallery-post-card.component';

describe('GalleryPostCardComponent', () => {
  let component: GalleryPostCardComponent;
  let fixture: ComponentFixture<GalleryPostCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPostCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
