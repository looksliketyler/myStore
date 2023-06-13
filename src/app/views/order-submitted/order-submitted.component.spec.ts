import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSubmittedComponent } from './order-submitted.component';

describe('OrderSubmittedComponent', () => {
  let component: OrderSubmittedComponent;
  let fixture: ComponentFixture<OrderSubmittedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderSubmittedComponent]
    });
    fixture = TestBed.createComponent(OrderSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
