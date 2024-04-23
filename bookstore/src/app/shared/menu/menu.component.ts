import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{

  @Output() selectedPage: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    console.log('colled ngoninit')
  }

  menuSwitch(pageValue: string){
    this.selectedPage.emit(pageValue);
  }

}
