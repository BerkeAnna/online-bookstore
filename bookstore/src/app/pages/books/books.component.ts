import { Component, OnInit } from '@angular/core';
import { BookObject } from '../../shared/constants/constants';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit{

  bookObject: Array<any> = BookObject;
  chosenCategory: any;

  constructor() {
    this.chosenCategory = this.bookObject[0];
  }

 
  ngOnInit(): void {
    
  }

  reload(){
    
  }


}
