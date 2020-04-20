import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPostComponent } from './about-post.component';

describe('AboutPostComponent', () => {
  let component: AboutPostComponent;
  let fixture: ComponentFixture<AboutPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
