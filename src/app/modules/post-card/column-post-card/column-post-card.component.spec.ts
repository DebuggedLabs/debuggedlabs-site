import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ColumnPostCardComponent } from './column-post-card.component';

describe('ColumnPostCardComponent', () => {
  let component: ColumnPostCardComponent;
  let fixture: ComponentFixture<ColumnPostCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnPostCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
