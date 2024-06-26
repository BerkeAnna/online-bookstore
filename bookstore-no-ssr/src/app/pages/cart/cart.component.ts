import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['title', 'author', 'price'];
  dataSource = [];
  items: any[] = [];
  total: number = 0;
  OrderForm = new FormGroup({
    bankAccount: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
    })
  });

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log('Items in cart:', this.items); // Check this log
    this.calculateTotal();
}


  calculateTotal(): void {
    this.total = this.items.reduce((acc, item) => acc + item.price, 0);
  }

  placeOrder(): void {
    if (this.OrderForm.valid && this.items.length > 0) {
      this.router.navigate(['/successfullyorder']);
    } else if (!this.OrderForm.valid) {
      alert('Please fill in all required fields.');
    } else {
      alert('Your cart is empty!');
    }
  }
}
