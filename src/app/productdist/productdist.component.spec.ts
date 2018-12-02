import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdistComponent } from './productdist.component';

describe('ProductdistComponent', () => {
  let component: ProductdistComponent;
  let fixture: ComponentFixture<ProductdistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
