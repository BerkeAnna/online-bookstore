import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './shared/services/auth.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bookstore';
  page = '';
  routes: Array<string> = [];
  loggedInUser?: firebase.User | null;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.routes = this.router.config.map(conf => conf.path) as string[];
    console.log(this.routes);
    
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
      const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;
      if (this.routes.includes(currentPage)) {
        this.page = currentPage;
      }
    });

    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      if (user) {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(this.loggedInUser));
          localStorage.setItem('userEmail', user.email ?? '');
        }
      } else {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(null));
          localStorage.setItem('userEmail', '');
        }
      }
    }, error => {
      console.error(error);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(null));
        localStorage.setItem('userEmail', '');
      }
    });
  }

  changePage(selectedPage: string) {
    this.router.navigateByUrl(selectedPage);
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav) {
    if (event === true) {
      sidenav.close();
    }
  }

  logout() {
    this.authService.logout().then(() => {
      console.log('Logged out successfully');
    }).catch(error => {
      console.error(error);
    });
  }
}
