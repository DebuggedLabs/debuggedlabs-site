import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RowListComponent } from './row-list.component';

describe('RowListComponent', () => {
  let component: RowListComponent;
  let fixture: ComponentFixture<RowListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
