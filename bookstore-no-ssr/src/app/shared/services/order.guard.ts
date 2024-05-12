import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderGuard implements CanActivate {
  constructor(private cartService: CartService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    const items = this.cartService.getItems();
    if (items.length > 0) {
      return of(true);
    } else {
      // Redirect to the books page if the cart is empty
      return of(this.router.createUrlTree(['/books'])); // Adjust this to your books listing page
    }
  }
}