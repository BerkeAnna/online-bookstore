import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CartComponent } from './pages/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './pages/books/list/list.component';
import { ViewerComponent } from './pages/books/viewer/viewer.component';
import { BookPageComponent } from './pages/books/book-page/book-page.component';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { BooksModule } from './pages/books/books.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    CartComponent,
    DateFormatPipe,
    BookPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BooksModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
