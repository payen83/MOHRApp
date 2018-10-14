import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsEmployerPage } from './tabs-employer.page';

describe('TabsPage', () => {
  let component: TabsEmployerPage;
  let fixture: ComponentFixture<TabsEmployerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsEmployerPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsEmployerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
