import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeViewChildComponent } from './life-view-child.component';

describe('LifeViewChildComponent', () => {
  let component: LifeViewChildComponent;
  let fixture: ComponentFixture<LifeViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
