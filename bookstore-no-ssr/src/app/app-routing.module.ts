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
import { AuthGuard } from './shared/services/auth.guard';
import { OrderGuard } from './shared/services/order.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'book-page', component: BookPageComponent, canActivate: [AuthGuard] }, // Protect this route
  { path: 'books', component: BooksComponent, canActivate: [AuthGuard] }, // Protect this route
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard, OrderGuard] },
  { path: 'successfullyorder', component: SuccessfullyorderComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '/not-found' },
  { path: 'not-found', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }