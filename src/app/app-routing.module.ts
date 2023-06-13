import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListViewComponent } from './views/product-list-view/product-list-view.component';
import { ProductDetailsViewComponent } from './views/product-details-view/product-details-view.component';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { OrderSubmittedComponent } from './views/order-submitted/order-submitted.component';

const routes: Routes = [
  { path: '', component: ProductListViewComponent, pathMatch: 'full' },
  { path: 'products', component: ProductListViewComponent },
  { path: 'product-details', component: ProductDetailsViewComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-submitted', component: OrderSubmittedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
