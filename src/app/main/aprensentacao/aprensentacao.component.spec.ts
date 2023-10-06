import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprensentacaoComponent } from './aprensentacao.component';

describe('AprensentacaoComponent', () => {
  let component: AprensentacaoComponent;
  let fixture: ComponentFixture<AprensentacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprensentacaoComponent]
    });
    fixture = TestBed.createComponent(AprensentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
