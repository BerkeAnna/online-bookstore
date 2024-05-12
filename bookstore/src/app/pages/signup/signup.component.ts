import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import e from 'express';
import { User } from '../../shared/models/User';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{
  
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
    })
  })

  constructor(private location : Location, private authService: AuthService, private userService: UserService, private router: Router){

  }
  
  ngOnInit(): void {
  
  }

  onSubmit() {
    const email = this.signUpForm.get('email')?.value as string;
    const password = this.signUpForm.get('password')?.value as string;
    
    if (this.signUpForm.get('password')?.value === this.signUpForm.get('rePassword')?.value) {
      this.authService.signup(email, password).then(cred => {
        const user: User = {
          id: cred.user?.uid as string,
          email: email,
          password: password,
          name: {
            firstname: this.signUpForm.get('name.firstname')?.value as string,
            lastname: this.signUpForm.get('name.lastname')?.value as string
          }
        };
        this.userService.create(user).then(() => {
          console.log('User added successfully');
          this.router.navigate(['/home']);  // Sikeres regisztráció utáni átirányítás
        }).catch(error => {
          console.error('Failed to add user:', error);
        });
      }).catch(error => {
        console.error('Signup failed:', error);
      });
    } else {
      console.error('Passwords do not match');
    }
  }


  goBack(){
    this.location.back();
  }


}
