import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TextPostPageComponent } from './text-post-page.component';

describe('TextPostPageComponent', () => {
  let component: TextPostPageComponent;
  let fixture: ComponentFixture<TextPostPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TextPostPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
