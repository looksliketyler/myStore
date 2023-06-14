import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from 'src/app/services/products/product.model';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  // @ts-ignore - adding as setting to null/undefined or {} causes error
  @Input() product: Product;
  @Input() details: boolean = false;
  @Output() addedToCart: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router, private productService: ProductService) {}

  /**
   * @description - emits a boolean if item was added to cart..will show an alert
   */
  private emitAddedtoCart(): void {
    this.addedToCart.emit(true);
    setTimeout(() => {
      this.addedToCart.emit(false);
    }, 3000);
  }

  /**
   * @description - sets the product to use in details view and navigates there
   * @param {Product} product - product to send to details view
   */
  public navigateToDetails(product: Product): void {
    this.productService.setProductForDetailView(product);
    this.router.navigateByUrl('/product-details');
  }

  /**
   * @description - adds product to cart
   */
  public addToCart(): void {
    const quantity: number = this.product.quantity + 1;
    this.productService.addToCart(this.product, quantity, this.product.price);
    this.emitAddedtoCart();
  }

  /**
   * @description - submits input 'form' and adds to cart
   * @param {number} quantity - amount of product
   */
  public submitForm(quantity: number): void {
    const quantityPrice: number = this.product.price * quantity
    this.productService.addToCart(this.product, quantity, quantityPrice);
    this.product.quantity = 1;
    this.emitAddedtoCart();
  }
}
