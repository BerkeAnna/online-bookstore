import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{


  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router, private loadingService: FakeLoadingService){

  }

  ngOnInit(): void {
   
  }


  async login() {
    // Promise
     this.loadingService.loadingWithPromise(this.email.value!, this.password.value!).then((_: boolean) => {
      console.log('This executed second.');
      this.router.navigateByUrl('/home');
    }).catch(error => {
      console.error(error, 'Incorrect email or password!');
    }).finally(() => {
      console.log('this is executed finally.');
    }); 

   

  }



}
