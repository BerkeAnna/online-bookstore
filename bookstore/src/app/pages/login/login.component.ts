import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{


  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router){

  }

  ngOnInit(): void {
   
  }


  login(){
      if(this.email.value === "test@gmail.com" && this.password.value === "123"){
        this.router.navigateByUrl('/home');

      }else{
        console.error('Incorrect email or password');
      }
  }



}
