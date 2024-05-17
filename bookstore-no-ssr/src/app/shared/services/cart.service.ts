// src/app/shared/services/cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  
})
export class CartService {
  private items: any[] = [];

  constructor() { }

  addItem(item: any): void {
    this.items.push(item);
    console.log('Item added:', item); 
}


getItems(): any[] {
    return this.items;
}


clearCart(): void {
  this.items = []; 
}
}