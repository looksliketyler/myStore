import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/services/products/product.model';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.css']
})
export class ProductListViewComponent implements OnInit {
  public apiProducts: Product[] = [];
  public popularProducts: Product[] = [];
  public isAddedToCart: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.subToProductApi();
  }

  /**
   * @description - method to grab products from a free api...if that api connection breaks (as it did during project testing), it will use the saved info
   * from assets folder
   */
  private subToProductApi(): void {
    this.productService.getApiProductData().subscribe(
      {
        next: (products: Product[]) => {
          products.forEach(product => {
            this.apiProducts.push(new Product(product));
          });
          this.popularProducts = this.apiProducts.filter(product => product.id % 2 === 0 && product.id <= 12);
        },
        error: (err: any) => {
          console.log('error here!', err);
          this.productService.getLocalProductData().subscribe({
            next: (products: Product[]) => {
              products.forEach(product => {
                this.apiProducts.push(new Product(product));
              });
              this.popularProducts = this.apiProducts.filter(product => product.id % 2 === 0 && product.id <= 12);
            }
          });
        }
      }
    );
  }

  /**
   * @description - kicks off with event emitter from app-product-card, sets added to cart variable
   * @param {boolean} addedToCart - true/false of item being added to cart
   */
  public addedToCart(addedToCart: boolean): void {
    this.isAddedToCart = addedToCart;
  }
}
