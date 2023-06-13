import { Component, Input } from '@angular/core';

import { Product } from 'src/app/services/products/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  // @ts-ignore - added since setting to null/undefined or {} still causes error
  @Input() product: Product;
  @Input() parentFunction: Function = () => {};

  /**
   * @description - runs the function passed in
   * @param {any} event -passed info to apply to function
   */
  public callParentFunction(event: any): void {
    this.parentFunction.apply(event);
  }

}
