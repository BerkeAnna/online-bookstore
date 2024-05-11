import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../../shared/models/Comment';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../../../shared/services/image.service';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.scss'
})
export class BookPageComponent implements OnInit{

 // commentObject: any = {};
  comments: Array<Comment> = [];
  imageUrl?: string;
  book: any;

  
  // TypeScript Code in your Component
  commentsForm = this.createForm({
    id: '',
    bookid: '',
    username: '',
    stars: 0,    // Ensure this is intended to be a string; otherwise, consider setting it as a number
    comment: '',
    date: new Date()
  });


  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private imageService: ImageService, 
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        console.log("All query params:", params);
        console.log("Price param:", params['price']);
        this.book = {
            id: params['id'],
            title: params['title'],
            author: params['author'],
            price: +params['price']  // Ensure this is a number
        };
        this.loadImage(this.book.id);
    });
}


  loadImage(imageUrl: string): void {
    this.imageService.getImage(`images/${imageUrl}.jpg`).subscribe(url => {
      this.book.imageUrl = url;  // Frissítsd az imageUrl-t, ha szükséges
    });
  }

  createForm(model: Comment){
    let formGroup=  this.fb.group(model);
    formGroup.get('username')?.addValidators([Validators.required]);
    formGroup.get('comment')?.addValidators([Validators.required, Validators.maxLength(500), Validators.minLength(10)]);
    formGroup.get('stars')?.addValidators([Validators.required]);
    return formGroup;
  }

  addComment(){
    if(this.commentsForm.valid){
      
      if (this.commentsForm.valid) {
        this.commentsForm.get('date')?.setValue(new Date());
    
        this.comments.push({...this.commentsForm.value as Comment});
       // this.router.navigateByUrl(`/book-page/successful/${this.commentsForm.get('username')?.value}`);
        this.commentsForm.reset();  // Reset the form to clear fields after submission
      }
    }
  }

  addToCart(book: any) {
    this.cartService.addItem(book);
    this.router.navigate(['/cart']);
}


  
  
}
