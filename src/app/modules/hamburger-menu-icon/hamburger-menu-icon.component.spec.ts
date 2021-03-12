import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HamburgerMenuIconComponent } from './hamburger-menu-icon.component';

describe('HamburgerMenuComponent', () => {
  let component: HamburgerMenuIconComponent;
  let fixture: ComponentFixture<HamburgerMenuIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburgerMenuIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgerMenuIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
