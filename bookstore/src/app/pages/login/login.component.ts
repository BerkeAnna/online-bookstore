import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';
import { stringify } from 'querystring';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{


  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;
  loading: boolean = false;
  
  constructor(private router: Router, private loadingService: FakeLoadingService, private authService: AuthService){

  }

  ngOnInit(): void {
   
  }


  async login() {
    this.loading = true;



   /* this.loadingObservation = this.loadingService.loadingWithObservable(this.email.value as string, this.password.value as string)
    this.loadingSubscription = this.loadingObservation
      .subscribe(
        {
          next: (data: boolean) => {
            this.router.navigateByUrl('/home');
          }, error: (error) => {
            console.error(error);
            this.loading= false;
          }, complete: () => {
            console.log('finally');
            this.loading= false;
          }
        }
      );
      */

      this.authService.login(this.email.value  as string, this.password.value  as string).then(cred =>{
        console.log(cred);
        this.router.navigateByUrl('/home');
        this.loading= false;
      }).catch(error => {
        console.error(error);
        this.loading= false;
      });
  }
  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }


}
