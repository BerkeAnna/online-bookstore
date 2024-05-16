import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { Comment } from '../models/Comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private firestore: AngularFirestore) {}

  // Add comments
  addComment(comment: Omit<Comment, 'id'>): Promise<DocumentReference<unknown>> {
    return this.firestore.collection('comments').add(comment);
  }

  // Retrieve comments for a specific book, ordered by date
  getComments(bookId: string): Observable<Comment[]> {
    return this.firestore.collection<Comment>('comments', ref => 
      ref.where('bookid', '==', bookId)
        .orderBy('date', 'desc'))
      .valueChanges({ idField: 'id' });
  }

  delete(id: string | undefined): Promise<void> {
    return this.firestore.collection<Comment>('comments').doc(id).delete();
  }

  update(comment: Comment): Promise<void> {
    return this.firestore.collection<Comment>('comments').doc(comment.id).set(comment);
  }

  getCommentsByRating(bookId: string, rating: number): Observable<Comment[]> {
    return this.firestore.collection<Comment>('comments', ref => 
      ref.where('bookid', '==', bookId)
         .where('stars', '==', rating.toString())
         .orderBy('date', 'desc'))
      .valueChanges({ idField: 'id' });
  }
}

