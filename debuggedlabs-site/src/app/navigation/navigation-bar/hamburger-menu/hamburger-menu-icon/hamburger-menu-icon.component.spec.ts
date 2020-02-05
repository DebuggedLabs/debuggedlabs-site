import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerMenuIconComponent } from './hamburger-menu-icon.component';

describe('HamburgerMenuComponent', () => {
  let component: HamburgerMenuIconComponent;
  let fixture: ComponentFixture<HamburgerMenuIconComponent>;

  beforeEach(async(() => {
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
