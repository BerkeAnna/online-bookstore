import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.scss'
})
export class BookPageComponent implements OnInit{


  commentObject: any = {};
  comments: Array<any> = [];


  ngOnInit(): void {
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
