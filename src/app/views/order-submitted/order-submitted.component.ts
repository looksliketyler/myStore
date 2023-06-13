import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-submitted',
  templateUrl: './order-submitted.component.html',
  styleUrls: ['./order-submitted.component.css']
})
export class OrderSubmittedComponent implements OnInit {
  public orderNumber: number = Math.floor(Math.random() * 10e5);
  public countdown: number = 10;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startTimer();
  }

  /**
   * @description - starts a timer that a user will see - countdown from 10  then routes to homepage
   */
  private startTimer(): void {
    const interval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(interval);
        this.router.navigateByUrl('');
      }
    }, 1000);
  }
}
