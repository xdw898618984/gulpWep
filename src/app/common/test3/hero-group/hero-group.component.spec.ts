import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroGroupComponent } from './hero-group.component';

describe('HeroGroupComponent', () => {
  let component: HeroGroupComponent;
  let fixture: ComponentFixture<HeroGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
