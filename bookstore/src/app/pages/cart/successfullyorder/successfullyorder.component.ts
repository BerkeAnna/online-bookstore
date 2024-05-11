import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successfullyorder',
  template: `<div>Order Completed Successfully!</div>`
})
export class SuccessfullyorderComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    // Redirect if the cart is not empty for any reason
    if (this.cartService.getItems().length > 0) {
      this.cartService.clearCart();
      this.router.navigate(['/books']);  // Adjust as needed
    }
  }
}
