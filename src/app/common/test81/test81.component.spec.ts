import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test81Component } from './test81.component';

describe('Test81Component', () => {
  let component: Test81Component;
  let fixture: ComponentFixture<Test81Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test81Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
