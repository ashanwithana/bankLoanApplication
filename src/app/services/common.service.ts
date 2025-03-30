import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse, ILoan } from '../model/loan';
import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

loggedUserData! :  IUser;

  constructor(private http: HttpClient) {
    const loggedData = sessionStorage.getItem('BankUser')
    if(loggedData){
      this.loggedUserData = JSON.parse(loggedData);
    }
   }

  onSaveLoan(obj: ILoan) {
    return this.http.post<IApiResponse>('https://projectapi.gerasim.in/api/BankLoan/AddNewApplication', obj);
  }

  onGetMyLoanList(customerId: number) {
    return this.http.get<IApiResponse>('https://projectapi.gerasim.in/api/BankLoan/GetMyApplications?customerId=' + customerId);
  }
  getApplicationAssigned(bankerId: number) {
    return this.http.get<IApiResponse>('https://projectapi.gerasim.in/api/BankLoan/GetApplicationAssigneedToMe?bankerId=' + bankerId);
  }
}
