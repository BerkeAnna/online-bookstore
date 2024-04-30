import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../../shared/models/Comment';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.scss'
})
export class BookPageComponent implements OnInit{


  commentObject: any = {};
  comments: Array<any> = [];

  
  // TypeScript Code in your Component
commentsForm = this.fb.group({
  username: [''],
  stars: [''],    // Ensure this is intended to be a string; otherwise, consider setting it as a number
  comment: [''],
  date: [new Date()]
});


  constructor(private fb: FormBuilder){

  }


  ngOnInit(): void {
  }

  createForm(model: Comment){
    return this.fb.group(model)
  }

  addComment(){
    //todo: legyen egy 1-5 ig pontozó is
    if(this.commentObject.username && this.commentObject.comment){
      this.commentObject['date'] = new Date();

      if(this.commentObject.stars) {
        this.commentObject['stars'] = Number(this.commentObject.stars);
      }
      
      this.comments.push({...this.commentObject});
      this.commentObject = {};
    }

  }
  
}
