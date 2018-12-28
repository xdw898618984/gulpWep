import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2OrderComponent } from './test2-order.component';

describe('Test2OrderComponent', () => {
  let component: Test2OrderComponent;
  let fixture: ComponentFixture<Test2OrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test2OrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
