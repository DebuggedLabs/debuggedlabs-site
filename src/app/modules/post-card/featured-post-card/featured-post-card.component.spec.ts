import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPostCardComponent } from './featured-post-card.component';

describe('FeaturedPostCardComponent', () => {
  let component: FeaturedPostCardComponent;
  let fixture: ComponentFixture<FeaturedPostCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedPostCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
