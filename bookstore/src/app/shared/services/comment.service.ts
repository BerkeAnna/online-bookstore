import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private firestore: AngularFirestore) {}

  // Add comments
  addComment(comment: Omit<Comment, 'id'>) {
    return this.firestore.collection('comments').add(comment);
  }

  // Retrieve comments for a specific book
  getComments(bookId: string) {
    return this.firestore.collection<Comment>('comments', ref => 
      ref.where('bookid', '==', bookId))
      .valueChanges({ idField: 'id' });
  }
}
