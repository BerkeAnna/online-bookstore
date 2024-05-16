import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private firestore: AngularFirestore) { }

  // Könyv lekérdezése azonosító alapján
  getBookById(bookId: string): Observable<Book[]> {
    return this.firestore.collection<Book>('Books', ref => 
      ref.where('category', '==', bookId))
      .valueChanges({ idField: 'id' });
  }

  // Összes könyv lekérdezése
  getAllBooks(): Observable<Book[]> {
    return this.firestore.collection<Book>('books').valueChanges();
  }
  
}
