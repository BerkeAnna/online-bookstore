import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Input() currentPage: string = '';
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  @Input() loggedInUser?: firebase.User | null;
  @Output() onLogout: EventEmitter<void> = new EventEmitter(); // Add this line to emit logout event

  ngOnInit(): void {
    console.log('called ngOnInit');
  }

  menuSwitch() {
    this.selectedPage.emit(this.currentPage);
  }

  close() {
    this.onCloseSidenav.emit(true);
  }

  logout() {
    this.onLogout.emit(); // Emit the logout event
    this.close(); // Close the sidenav
  }
}
