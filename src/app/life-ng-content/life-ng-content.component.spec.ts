import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeNgContentComponent } from './life-ng-content.component';

describe('LifeNgContentComponent', () => {
  let component: LifeNgContentComponent;
  let fixture: ComponentFixture<LifeNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
