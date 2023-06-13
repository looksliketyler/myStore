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
    this.getTotalAmount();
  }

  /**
   * @description - method loops over products to determine total price to display to user
   */
  private getTotalAmount(): void {
    let price: number;
    this.products.forEach(product => {
      price = product.price * product.quantity;
      this.totalAmount += product.quantityPrice;
    });
  }

  /**
   * @description - removes product from cart based on id
   * @param {number} id - id of prod to be removed
   */
  public removeItem(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
    this.productService.removeFromCart(id);
  }

  /**
   * @description - when checkout button in ui is cliked, routes to checkout form
   */
  public checkout(): void {
    this.router.navigateByUrl('/checkout');
  }

}
