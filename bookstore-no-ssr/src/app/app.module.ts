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
   // provideFirebaseApp(() => initializeApp({"projectId":"bookstore-no-ssr","appId":"1:705035837325:web:5ed20a27f041318dfaa7c4","storageBucket":"bookstore-no-ssr.appspot.com","apiKey":"AIzaSyBuU6JLk0573SwgP6_RPlS34jNbVI1uxj0","authDomain":"bookstore-no-ssr.firebaseapp.com","messagingSenderId":"705035837325"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() => initializeApp({"projectId":"bookstore-1fb04","appId":"1:894664042092:web:05a74875c56b37c5571a49","storageBucket":"bookstore-1fb04.appspot.com","apiKey":"AIzaSyAYI1q8Uer-f7IDe5_fSK2tdX9dwDRAM6E","authDomain":"bookstore-1fb04.firebaseapp.com","messagingSenderId":"894664042092"})),
   // provideFirebaseApp(() => initializeApp({"projectId":"bookstore-no-ssr-2","appId":"1:836179747545:web:77702b3cb7d76dec6b54c8","storageBucket":"bookstore-no-ssr-2.appspot.com","apiKey":"AIzaSyC0ZlSmKTpilfYyQN_nNSBYJUE7f0smkFA","authDomain":"bookstore-no-ssr-2.firebaseapp.com","messagingSenderId":"836179747545"})),
//provideFirebaseApp(() => initializeApp({"projectId":"bs-no-ssr","appId":"1:770675706709:web:b8bcac47ecb361a112fddc","storageBucket":"bs-no-ssr.appspot.com","apiKey":"AIzaSyBF3Mtb0NGzHiTP-JVmd42iNZeEaRtprvc","authDomain":"bs-no-ssr.firebaseapp.com","messagingSenderId":"770675706709"})),
//ez a jóóóóóó:::vvvv  
//  provideFirebaseApp(() => initializeApp({"projectId":"bookstore-no-ssr-2","appId":"1:836179747545:web:8eef6315a3cc7cf86b54c8","storageBucket":"bookstore-no-ssr-2.appspot.com","apiKey":"AIzaSyC0ZlSmKTpilfYyQN_nNSBYJUE7f0smkFA","authDomain":"bookstore-no-ssr-2.firebaseapp.com","messagingSenderId":"836179747545"}))//ez a jo
//ez a jóóó ^^^^^^^^ 
],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
