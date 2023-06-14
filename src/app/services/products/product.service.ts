import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // @ts-ignore - setting to null/undefined or a blank object still shows error
  private productForDetailView: Product;
  private productsInCart: Product[] = [];

  constructor(private http: HttpClient) { }

  /**
   * @description - makes http get request to fakestoreapi and grabs products
   * @returns {Observable<Product[]>} - products
   */
  public getApiProductData(): Observable<Product[]>  {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  /**
   * @description - makes 'get request' to local assets folder...fallback incase above get request doesnt work
   * @returns {Observable<Product[]>} - products
   */
  public getLocalProductData(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/data.json');
  }

  /**
   * @description - sets the product to be used for the product detail view
   * @param {Product} product - passed product
   */
  public setProductForDetailView(product: Product): void {
    this.productForDetailView = product;
  }

  /**
   * @description - returns the product for details view
   * @returns {Product} - product to be used
   */
  public getProductForDetailView(): Product {
    return this.productForDetailView;
  }

  /**
   * @description - removes product form productsInCart array
   * @param {number} id - id of product to be removed
   */
  public removeFromCart(id: number): void {
    this.productsInCart = this.productsInCart.filter(product => product.id !== id);
  }

  /**
   * @description - adds product to the cart if the product doesnt exists, otherwise will update the amount of the product passed
   * @param {Product} product - product passed
   * @param {number} newQuantity - new amount of passed product
   * @param {number} quantityPrice - price for the amount of product passed
   */
  public addToCart(product: Product, newQuantity: number, quantityPrice: number): void {
    let productExists: boolean = false;

    for (const productInCart of this.productsInCart) {
      if (productInCart.id === product.id) {
        productInCart.quantity += newQuantity;
        productInCart.quantityPrice = quantityPrice;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      product.quantityPrice = quantityPrice;
      product.quantity = newQuantity;
      this.productsInCart.push(product);
    }
  }

  /**
   * @description - returns a list of all products in cart
   * @returns {Product[]} products in cart
   */
  public getProductsInCart(): Product[] {
    return this.productsInCart;
  }

  /**
   * @description - wipes clean the cart
   */
  public clearCart(): void {
    this.productsInCart = [];
  }
}
