import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../../../shared/services/image.service';
import { CartService } from '../../../shared/services/cart.service';
import { CommentService } from '../../../shared/services/comment.service';
import { Comment } from '../../../shared/models/Comment';
import { BooksService } from '../../../shared/services/books.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  comments: Comment[] = [];
  imageUrl?: string;
  book: any;
  bookId!: string;
  currentUser: string | null = localStorage.getItem('currentUser'); // Assuming the current user's username is stored in localStorage

  commentsForm = this.fb.group({
    username: ['', [Validators.required]],
    stars: [0, [Validators.required]],
    comment: ['', [Validators.required, Validators.maxLength(500), Validators.minLength(10)]],
    date: [new Date()]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private imageService: ImageService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private commentService: CommentService,
    private bookService: BooksService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.bookId = params['id'];
      if (this.bookId) {
        this.bookService.getBookById(this.bookId).subscribe(book => {
          this.book = book;
          this.loadImage(this.bookId);
          this.loadComments();
        });
      }
    });
  }

  addComment(): void {
    if (this.commentsForm.valid) {
      const formValue = this.commentsForm.getRawValue();
      const newComment: Omit<Comment, 'id'> = {
        bookid: this.bookId,
        username: formValue.username ?? '',
        stars: formValue.stars ?? 0,
        comment: formValue.comment ?? '',
        date: formValue.date ?? new Date()
      };

      this.commentService.addComment(newComment).then(docRef => {
        const fullComment: Comment = {
          ...newComment,
          id: docRef.id
        };
        this.comments.push(fullComment);
        this.commentsForm.reset();
      }).catch(error => {
        console.error("Failed to add comment: ", error);
      });
    }
  }

  loadComments(): void {
    this.commentService.getComments(this.bookId).subscribe(comments => {
      this.comments = comments;
    });
  }

  onRatingChange(rating: number): void {
    if (rating > 0) {
      this.loadCommentsByRating(rating);
    } else {
      this.loadComments();
    }
  }

  loadCommentsByRating(rating: number): void {
    this.commentService.getCommentsByRating(this.bookId, rating).subscribe(comments => {
      this.comments = comments;
    });
  }

  addToCart(book: any): void {
    this.cartService.addItem(book);
    this.router.navigate(['/cart']);
  }

  loadImage(imageUrl: string): void {
    this.imageService.getImage(`images/${imageUrl}.jpg`).subscribe(url => {
      this.book.imageUrl = url;
    });
  }

  isCommentOwner(username: string): boolean {
    console.log("cur: " + this.currentUser)
    return this.currentUser === username;
  }

  deleteComment(commentId: string | undefined): void {
    this.commentService.delete(commentId).then(() => {
      this.comments = this.comments.filter(comment => comment.id !== commentId);
    }).catch(error => {
      console.error("Failed to delete comment: ", error);
    });
  }
}
