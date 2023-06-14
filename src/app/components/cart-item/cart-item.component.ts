import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/services/products/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  // @ts-ignore - added since setting to null/undefined or {} still causes error
  @Input() product: Product;
  @Input() parentFunction: Function = () => {};
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  /**
   * @description - runs the function passed in
   * @param {any} event -passed info to apply to function
   */
  public callParentFunction(event: any): void {
    this.parentFunction.apply(event);
  }

  /**
   * @description - changes and emits product quantity
   */
  public updateQuantity(): void {
    this.quantityChange.emit(this.product.quantity);
    this.product.quantity = Math.max(0, this.product.quantity); // Ensure non-negative quantity
  }

}
