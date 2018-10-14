import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerPaymentPage } from './employer-payment.page';

describe('EmployerPaymentPage', () => {
  let component: EmployerPaymentPage;
  let fixture: ComponentFixture<EmployerPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerPaymentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
