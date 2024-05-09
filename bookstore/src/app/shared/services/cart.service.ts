// src/app/shared/services/cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Ez biztosítja, hogy a szerviz globálisan elérhető legyen az alkalmazáson belül
})
export class CartService {
  private items: any[] = [];

  constructor() { }

  addItem(item: any): void {
    this.items.push(item);
    console.log('Item added:', item); // Use this log to ensure data is added
}

getItems(): any[] {
    return this.items;
}


  clearCart(): void {
    this.items = [];
  }
}
