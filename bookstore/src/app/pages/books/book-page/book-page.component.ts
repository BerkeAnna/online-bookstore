import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../../shared/models/Comment';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.scss'
})
export class BookPageComponent implements OnInit{


 // commentObject: any = {};
  comments: Array<Comment> = [];

  
  // TypeScript Code in your Component
commentsForm = this.createForm({
  username: '',
  stars: 0,    // Ensure this is intended to be a string; otherwise, consider setting it as a number
  comment: '',
  date: new Date()
});


  constructor(private fb: FormBuilder, private router: Router){

  }


  ngOnInit(): void {
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
        this.router.navigateByUrl(`/book-page/successful/${this.commentsForm.get('username')?.value}`);
        this.commentsForm.reset();  // Reset the form to clear fields after submission
      }
    }
  }

  
  
}
