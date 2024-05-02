import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent implements OnInit{

  @Input() categoryInput: any;


  constructor(private router: Router){

  }

  ngOnInit(): void {
  }

  viewMore(book: any) {
    this.router.navigateByUrl('/book-page');
  }

}
