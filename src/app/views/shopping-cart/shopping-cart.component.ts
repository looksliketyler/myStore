import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from 'src/app/services/products/product.model';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public products: Product[] = [];
  public totalAmount: number = 0;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.productService.getProductsInCart();
    this.calculateTotalAmount();
  }

  /**
   * @description - method used to calculate total price of all products
   */
  private calculateTotalAmount(): void {
    this.totalAmount = this.products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }

  /**
   * @description - removes product from shopping cart based off id
   * @param {number} id - passed id of product to be removed
   */
  public removeItem(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
    this.productService.removeFromCart(id);
    this.calculateTotalAmount();
  }

  /**
   * @description - for event emitter, calls calculateTotalAmount()
   */
  public updateTotalAmount(): void {
    this.calculateTotalAmount();
  }

  /**
   * @description - navigates to checkout page
   */
  public checkout(): void {
    this.router.navigateByUrl('/checkout');
  }
}
