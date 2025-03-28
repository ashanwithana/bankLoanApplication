import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  toggleForm = signal<boolean>(false);
  http = inject(HttpClient);
  redirector = inject(Router);

  changeForm() {
    this.toggleForm.set(!this.toggleForm());
  }

  customerObj: any = {
    userId: 0,
    userName: '',
    emailId: '',
    fullName: '',
    password: '',
  };

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  onRegister() {
    this.http
      .post(
        'https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer',
        this.customerObj
      )
      .subscribe(
        (res: any) => {
          if (res.result) {
            alert('Registered Successfully');
          } else {
            alert(res.message);
          }
        },
        (error) => {
          alert('Network Error');
        }
      );
  }

  onLogin() {
    const loginObj = this.loginForm.value;
    this.http
      .post('https://projectapi.gerasim.in/api/BankLoan/login', loginObj)
      .subscribe(
        (res: any) => {
          if (res.result) {
            sessionStorage.setItem('BankUser', JSON.stringify(res.data));
            this.redirector.navigateByUrl('loanApplicationList');
          } else {
            alert(res.message);
          }
        },
        (error) => {
          console.error('HTTP Error:', error);
          alert('Network Error');
        }
      );
  }
}
