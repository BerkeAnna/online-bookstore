import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (isPlatformBrowser(this.platformId)) {
      // Access localStorage only if on the browser
      const user = localStorage.getItem('user');
      if (user) {
        return true;
      }
    } else {
      // Handle server-side or non-browser environments
      console.warn('Attempted to access localStorage on the server.');
    }

    // Redirect to login or handle appropriately if not authenticated
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}