import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeNgchangeChildComponent } from './life-ngchange-child.component';

describe('LifeNgchangeChildComponent', () => {
  let component: LifeNgchangeChildComponent;
  let fixture: ComponentFixture<LifeNgchangeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeNgchangeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeNgchangeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
