import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageButtonComponent } from './home-page-button.component';

describe('HomePageButtonComponent', () => {
  let component: HomePageButtonComponent;
  let fixture: ComponentFixture<HomePageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
