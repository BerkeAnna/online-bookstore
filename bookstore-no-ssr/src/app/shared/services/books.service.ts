import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Book } from '../models/Book'; // Feltételezzük, hogy van egy Book modelled

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private firestore: AngularFirestore) { }


  // Összes könyv lekérdezése
  getAllBooks(): Observable<Book[]> {
    return this.firestore.collection<Book>('books').valueChanges();
  }
}
