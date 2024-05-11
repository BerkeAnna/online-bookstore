import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessfulComponent } from './pages/books/book-page/successful/successful.component';
import { AuthGuard } from './shared/services/auth.guard';
import { SuccessfullyorderComponent } from './pages/cart/successfullyorder/successfullyorder.component';
import { OrderGuard } from './shared/services/order.guard';

const routes: Routes = [
  // app-routing.module.ts
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'book-page', loadChildren: () => import('./pages/books/book-page/book-page.module').then(m => m.BookPageModule),
  canActivate: [AuthGuard]
   },

  { path: 'books', loadChildren: () => import('./pages/books/books.module').then(m => m.BooksModule),
    canActivate: [AuthGuard]
   },
  { path: 'contact',loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
  { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule),
  canActivate: [AuthGuard]
   },

   { path: 'cart/successful', component: SuccessfullyorderComponent, canActivate: [OrderGuard] },


  { 
    path: 'book-page/successful/:username', 
    component: SuccessfulComponent
  },
  
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },  // Alapértelmezett útvonal beállítása
  { path: '**', redirectTo: '/not-found' } , // Nem létező útvonalak kezelése
  { 
    path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
