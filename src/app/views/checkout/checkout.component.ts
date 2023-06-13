import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  public formModel: any = {};
  public billingAddress: boolean = false;

  constructor(private router: Router) {}

  /**
   * @description - toggles in view if the user's billing address is same as shipping..and hides the billing address section of form
   */
  public toggleBillingAddress(): void {
    this.billingAddress = !this.billingAddress;
  }

  /**
   * @description - if form is valid, will route to order submitted page
   */
  public onSubmit(form: NgForm): void {
    if (form.valid) {
      this.submitForm(form);
      this.router.navigateByUrl('/order-submitted');
    }
  }

  /**
   * @description - placeholder to have in onSubmit() - if form being sent to database, this is where it would be sent
   * @param {NgForm} form - form from ui
   */
  private submitForm(form: NgForm): void {
    console.log(form.value);
  }

}
