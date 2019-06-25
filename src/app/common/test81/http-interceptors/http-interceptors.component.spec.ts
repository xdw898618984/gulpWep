import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpInterceptorsComponent } from './http-interceptors.component';

describe('HttpInterceptorsComponent', () => {
  let component: HttpInterceptorsComponent;
  let fixture: ComponentFixture<HttpInterceptorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpInterceptorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpInterceptorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
