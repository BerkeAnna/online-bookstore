import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any[] = [];

  constructor(private cartService: CartService) {}

  
  OrderForm = new FormGroup({
    bankAccount: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
    })
  })

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log('Cart items:', this.items); // Debugging the fetched items
}


  placeOrder(): void {
    // Rendelés leadása logikája
  }
}
