import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bankLoanApplication';
  loggedUserData:any;
  redirector = inject(Router);

  commonService = inject(CommonService);

  constructor(){
    // const loggedData = sessionStorage.getItem("BankUser");
    // if(loggedData){
    //   this.loggedUserData = JSON.parse(loggedData);
    // }
  }

  onLogout() {
    sessionStorage.removeItem('BankUser');
    this.redirector.navigateByUrl('login');
  }
}
