import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalPostCardComponent } from './horizontal-post-card.component';

describe('HorizontalPostCardComponent', () => {
  let component: HorizontalPostCardComponent;
  let fixture: ComponentFixture<HorizontalPostCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalPostCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
