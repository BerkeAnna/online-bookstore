import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../shared/services/cart.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any[] = [];
  OrderForm = new FormGroup({
    bankAccount: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
    })
  });

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  placeOrder(): void {
    if (this.items.length > 0) {
      this.router.navigate(['/cart/successful']); // Csak akkor navigál, ha van tartalom a kosárban
    } else {
      alert('Your cart is empty!'); // Esetleges üzenet, ha a kosár üres
    }
  }
}
