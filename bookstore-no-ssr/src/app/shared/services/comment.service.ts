import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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

  // Retrieve comments for a specific book, ordered by date
  getComments(bookId: string) {
    return this.firestore.collection<Comment>('comments', ref => 
      ref.where('bookid', '==', bookId)
        .orderBy('date', 'desc'))
      .valueChanges({ idField: 'id' });
  }

  // Delete a comment based on its document ID
  delete(id: string | undefined) {
    return this.firestore.collection<Comment>('comments').doc(id).delete();
  }

  // Update a comment's document based on its ID
  update(comment: Comment) {
    return this.firestore.collection<Comment>('comments').doc(comment.id).set(comment);
  }

  // Retrieve comments by rating for a specific book
  getCommentsByRating(bookId: string, rating: number) {
    return this.firestore.collection<Comment>('comments', ref => 
      ref.where('bookid', '==', bookId)
         .where('stars', '==', rating)
         .orderBy('date', 'desc'))
      .valueChanges({ idField: 'id' });
  }
}
