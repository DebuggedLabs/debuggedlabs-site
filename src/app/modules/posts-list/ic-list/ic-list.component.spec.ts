import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICListComponent } from './ic-list.component';

describe('IcListComponent', () => {
  let component: ICListComponent;
  let fixture: ComponentFixture<ICListComponent>;

  beforeEach(async(() => {
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
