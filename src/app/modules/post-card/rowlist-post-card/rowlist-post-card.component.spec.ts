import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RowlistPostCardComponent } from './rowlist-post-card.component';

describe('RowlistPostCardComponent', () => {
  let component: RowlistPostCardComponent;
  let fixture: ComponentFixture<RowlistPostCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RowlistPostCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowlistPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
