import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollingComponent } from './web.component';

describe('InfiniteScrollingComponent', () => {
  let component: InfiniteScrollingComponent;
  let fixture: ComponentFixture<InfiniteScrollingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfiniteScrollingComponent]
    });
    fixture = TestBed.createComponent(InfiniteScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
