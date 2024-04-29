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
  }

  constructor(){
    
    this.chosenCategory = this.bookObjectInput[0];
  }
  
  reload(){
    this.categoryObjectEmitter.emit(this.chosenCategory);
  }
}
