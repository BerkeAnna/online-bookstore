import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookPageComponent } from './pages/books/book-page/book-page.component';
import { BooksComponent } from './pages/books/books.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { SuccessfullyorderComponent } from './pages/cart/successfullyorder/successfullyorder.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
 { path: 'home', component: HomeComponent },
 { path: 'book-page', component: BookPageComponent,
  //canActivate: [AuthGuard]
   },

  { path: 'books', component: BooksComponent,
 //   canActivate: [AuthGuard]
   },
   
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent,
//  canActivate: [OrderGuard]
   },

   { path: 'cart/successful', component: SuccessfullyorderComponent, //canActivate: [OrderGuard]

    },

/*
  { 
    path: 'book-page/successful/:username', 
    component: SuccessfulComponent
  },
  */
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},  // Alapértelmezett útvonal beállítása
  { path: '**', redirectTo: '/not-found' } , // Nem létező útvonalak kezelése
  { 
    path: 'not-found',component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }