import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostCardBaseComponent } from './post-card-base.component';

describe('PostCardBaseComponent', () => {
  let component: PostCardBaseComponent;
  let fixture: ComponentFixture<PostCardBaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCardBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
