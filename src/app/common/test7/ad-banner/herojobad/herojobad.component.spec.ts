import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerojobadComponent } from './herojobad.component';

describe('HerojobadComponent', () => {
  let component: HerojobadComponent;
  let fixture: ComponentFixture<HerojobadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerojobadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerojobadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
