import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';
import { stringify } from 'querystring';
import { Observable, Subscription } from 'rxjs';

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
  
  constructor(private router: Router, private loadingService: FakeLoadingService){

  }

  ngOnInit(): void {
   
  }


  async login() {
    this.loading = true;

    this.loadingObservation = this.loadingService.loadingWithObservable(this.email.value as string, this.password.value as string)
    this.loadingSubscription = this.loadingObservation
      .subscribe(
        {
          next: (data: boolean) => {
            this.router.navigateByUrl('/home');
          }, error: (error) => {
            console.error(error);
          }, complete: () => {
            console.log('finally');
          }
        }
      );
  }
  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }


}
