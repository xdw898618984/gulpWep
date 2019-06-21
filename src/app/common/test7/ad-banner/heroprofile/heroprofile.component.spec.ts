import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroprofileComponent } from './heroprofile.component';

describe('HeroprofileComponent', () => {
  let component: HeroprofileComponent;
  let fixture: ComponentFixture<HeroprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
