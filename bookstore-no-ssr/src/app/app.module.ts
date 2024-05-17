import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { BooksComponent } from './pages/books/books.component';
import { ViewerComponent } from './pages/books/viewer/viewer.component';
import { ListComponent } from './pages/books/list/list.component';
import { BookPageComponent } from './pages/books/book-page/book-page.component';
import { CartComponent } from './pages/cart/cart.component';
import { SuccessfullyorderComponent } from './pages/cart/successfullyorder/successfullyorder.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';


import { environment } from '../environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    //ContactComponent,
    MenuComponent,
    BooksComponent,
    ViewerComponent,
    ListComponent,
    BookPageComponent,
    CartComponent,
    SuccessfullyorderComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    SignupComponent,
    DateFormatPipe,
    
    //CartComponent,
    //DateFormatPipe,
    //BookPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ReactiveFormsModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() => initializeApp({"projectId":"bookstore-1fb04","appId":"1:894664042092:web:05a74875c56b37c5571a49","storageBucket":"bookstore-1fb04.appspot.com","apiKey":"AIzaSyAYI1q8Uer-f7IDe5_fSK2tdX9dwDRAM6E","authDomain":"bookstore-1fb04.firebaseapp.com","messagingSenderId":"894664042092"})),

],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
