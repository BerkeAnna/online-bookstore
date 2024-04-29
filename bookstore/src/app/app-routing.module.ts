import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // app-routing.module.ts
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'book-page', loadChildren: () => import('./pages/books/book-page/book-page.module').then(m => m.BookPageModule) },

  { path: 'books', loadChildren: () => import('./pages/books/books.module').then(m => m.BooksModule) },
  { path: 'contact',loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
  { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) },


  { 
    path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Alapértelmezett útvonal beállítása
  { path: '**', redirectTo: '/not-found' }  // Nem létező útvonalak kezelése

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
