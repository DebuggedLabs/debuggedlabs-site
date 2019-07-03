import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMenuItemComponent } from './post-menu-item.component';

describe('PostMenuItemComponent', () => {
  let component: PostMenuItemComponent;
  let fixture: ComponentFixture<PostMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
