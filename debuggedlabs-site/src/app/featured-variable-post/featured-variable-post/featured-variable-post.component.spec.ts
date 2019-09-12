import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedVariablePostComponent } from './featured-variable-post.component';

describe('FeaturedVariablePostComponent', () => {
  let component: FeaturedVariablePostComponent;
  let fixture: ComponentFixture<FeaturedVariablePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedVariablePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedVariablePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
