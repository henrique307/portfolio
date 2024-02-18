import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCarrosselComponent } from './item-carrossel.component';

describe('ItemCarrosselComponent', () => {
  let component: ItemCarrosselComponent;
  let fixture: ComponentFixture<ItemCarrosselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCarrosselComponent]
    });
    fixture = TestBed.createComponent(ItemCarrosselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
