import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListViewComponent } from './views/product-list-view/product-list-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsViewComponent } from './views/product-details-view/product-details-view.component';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AlertComponent } from './components/alert/alert.component';
import { OrderSubmittedComponent } from './views/order-submitted/order-submitted.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListViewComponent,
    NavbarComponent,
    ProductCardComponent,
    ProductDetailsViewComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    CartItemComponent,
    AlertComponent,
    OrderSubmittedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
