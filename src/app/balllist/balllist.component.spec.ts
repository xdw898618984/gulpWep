import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalllistComponent } from './balllist.component';

describe('BalllistComponent', () => {
  let component: BalllistComponent;
  let fixture: ComponentFixture<BalllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalllistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
