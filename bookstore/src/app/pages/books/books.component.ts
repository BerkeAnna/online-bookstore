import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit{

  reload(){
    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
