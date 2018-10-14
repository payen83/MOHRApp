import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerAccountPage } from './employer-account.page';

describe('EmployerAccountPage', () => {
  let component: EmployerAccountPage;
  let fixture: ComponentFixture<EmployerAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerAccountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
