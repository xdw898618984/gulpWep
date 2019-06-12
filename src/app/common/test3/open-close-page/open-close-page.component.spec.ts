import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenClosePageComponent } from './open-close-page.component';

describe('OpenClosePageComponent', () => {
  let component: OpenClosePageComponent;
  let fixture: ComponentFixture<OpenClosePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenClosePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenClosePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
