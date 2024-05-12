import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{

  @Input() bookObjectInput: Array<any> = [];
  @Output() categoryObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenCategory: any;

  ngOnInit(): void {
    this.chosenCategory = this.bookObjectInput[0];
    this.reload();
  }

  constructor(){
    
  }
  
  reload(){
    this.categoryObjectEmitter.emit(this.chosenCategory);
  }
}