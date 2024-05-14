import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successfullyorder',
  template: `
    <div>Order Completed Successfully!</div>
    <button mat-raised-button color="primary" (click)="navigateToBooks()">OK</button>
  `
})
export class SuccessfullyorderComponent {

  constructor(private cartService: CartService, private router: Router) {}

  navigateToBooks() {
    this.cartService.clearCart();
    this.router.navigate(['/books']);
  }
}
