import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerStaffPage } from './employer-staff.page';

describe('EmployerStaffPage', () => {
  let component: EmployerStaffPage;
  let fixture: ComponentFixture<EmployerStaffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerStaffPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerStaffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
