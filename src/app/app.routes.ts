import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BankerListComponent } from './components/banker-list/banker-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { LoanApplicationListComponent } from './components/loan-application-list/loan-application-list.component';
import { NewLoanComponent } from './components/new-loan/new-loan.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'bankerList', component: BankerListComponent },
  { path: 'customerList', component: CustomerListComponent },
  { path: 'loanApplicationList', component: LoanApplicationListComponent },
  { path: 'newLoan', component: NewLoanComponent },
  { path: '**', redirectTo: 'home' }, 
];
