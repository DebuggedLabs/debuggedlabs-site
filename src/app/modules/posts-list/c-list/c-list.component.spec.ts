import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CListComponent } from './c-list.component';

describe('EListComponent', () => {
  let component: CListComponent;
  let fixture: ComponentFixture<CListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
