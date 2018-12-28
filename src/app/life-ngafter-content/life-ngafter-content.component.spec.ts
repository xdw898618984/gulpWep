import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeNgafterContentComponent } from './life-ngafter-content.component';

describe('LifeNgafterContentComponent', () => {
  let component: LifeNgafterContentComponent;
  let fixture: ComponentFixture<LifeNgafterContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeNgafterContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeNgafterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
