import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/services/products/product.model';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.css']
})
export class ProductDetailsViewComponent implements OnInit {
  // @ts-ignore - setting to null/undefined or a blank object still shows error
  public product: Product;
  public isAddedToCart: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.product = this.productService.getProductForDetailView();
  }

  /**
   * @description - listens to event emitter from app-product-card and sets variable
   * @param {boolean} addedToCart - true/false value passed
   */
  public addedToCartAlert(addedToCart: boolean): void {
    this.isAddedToCart = addedToCart;
  }
}
