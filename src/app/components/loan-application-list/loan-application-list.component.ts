import { Component, inject } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { IApiResponse } from '../../model/loan';
import { IApplication } from '../../model/application';

@Component({
  selector: 'app-loan-application-list',
  imports: [],
  templateUrl: './loan-application-list.component.html',
  styleUrl: './loan-application-list.component.css',
})
export class LoanApplicationListComponent {
  commonService = inject(CommonService);
  applicationList: IApplication[] = [];
  constructor() {
    if (this.commonService.loggedUserData.role == 'Customer') {
      this.getUserLoanList();
    } else {
      this.getAssignedApplication();
    }
  }

  getUserLoanList() {
    this.commonService
      .onGetMyLoanList(this.commonService.loggedUserData.userId)
      .subscribe((res: IApiResponse) => {
        this.applicationList = res.data;
      });
  }

  getAssignedApplication() {
    this.commonService.getApplicationAssigned(this.commonService.loggedUserData.userId).subscribe((res: IApiResponse) => {
      this.applicationList = res.data;
    })
  }
}
