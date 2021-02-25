import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPageBaseComponent } from './post-page-base.component';

describe('PostPageBaseComponent', () => {
  let component: PostPageBaseComponent;
  let fixture: ComponentFixture<PostPageBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPageBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPageBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
