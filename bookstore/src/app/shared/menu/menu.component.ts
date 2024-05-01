import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{

  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Input() currentPage: string = '';
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    console.log('colled ngoninit')
  }

  menuSwitch(){
    this.selectedPage.emit(this.currentPage);
  }


  close() {
    this.onCloseSidenav.emit(true);
  }
}
