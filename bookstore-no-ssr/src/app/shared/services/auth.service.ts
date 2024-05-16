import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) { }

  // Login
  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // Signup
  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  // Check if user is logged in
  isUserLoggedIn() {
    return this.auth.user;
  }

  // Logout
  logout() {
    return this.auth.signOut();
  }
}
