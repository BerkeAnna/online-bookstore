import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../../../shared/services/image.service';
import { CartService } from '../../../shared/services/cart.service';
import { CommentService } from '../../../shared/services/comment.service';
import { Comment } from '../../../shared/models/Comment';

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
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.book = {
        id: params['id'],
        title: params['title'],
        author: params['author'],
        price: +params['price']
      };
      
      console.log(this.book);
      this.bookId = this.book.id;
      this.loadImage(this.book.id);
      this.loadComments();  
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
  onRatingChange(rating: number) {
    if (rating > 0) {
      this.loadCommentsByRating(rating);
    } else {
      this.loadComments(); // Load all comments if no specific rating is selected
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
 
  
}
