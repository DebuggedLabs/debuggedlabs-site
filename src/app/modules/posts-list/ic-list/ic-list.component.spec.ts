import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ICListComponent } from './ic-list.component';

describe('IcListComponent', () => {
  let component: ICListComponent;
  let fixture: ComponentFixture<ICListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ICListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
