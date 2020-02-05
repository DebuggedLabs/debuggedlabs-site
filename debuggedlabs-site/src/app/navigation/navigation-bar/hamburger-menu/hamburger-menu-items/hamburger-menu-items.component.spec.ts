import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerMenuItemsComponent } from './hamburger-menu-items.component';

describe('HamburgerMenuItemsComponent', () => {
  let component: HamburgerMenuItemsComponent;
  let fixture: ComponentFixture<HamburgerMenuItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburgerMenuItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgerMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
