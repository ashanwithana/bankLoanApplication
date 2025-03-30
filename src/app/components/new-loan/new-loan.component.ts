import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { IApiResponse } from '../../model/loan';

@Component({
  selector: 'app-new-loan',
  imports: [ReactiveFormsModule],
  templateUrl: './new-loan.component.html',
  styleUrl: './new-loan.component.css',
})
export class NewLoanComponent {
  loanAppForm: FormGroup = new FormGroup({});

  formBuilder = inject(FormBuilder);

  commandService = inject(CommonService);

  constructor() {
    this.initForm();
    if(this.commandService.loggedUserData){
      this.loanAppForm.controls['customerId'].setValue(this.commandService.loggedUserData.userId);
    }
  }

  initForm() {
    this.loanAppForm = this.formBuilder.group({
      applicantID: [0],
      fullName: [''],
      applicationStatus: [''],
      panCard: [''],
      dateOfBirth: [''],
      email: [''],
      phone: [''],
      address: [''],
      city: [''],
      state: [''],
      zipCode: [''],
      annualIncome: [0],
      employmentStatus: [''],
      creditScore: [0],
      assets: [''],
      dateApplied: [new Date()],
      loans: this.formBuilder.array([this.createLoan()]),
      customerId: [0],
    });
  }

  createLoan(): FormGroup {
    return this.formBuilder.group({
      loanID: [0],
      applicantID: [0],
      bankName: [''],
      loanAmount: [0],
      emi: [0],
    });
  }

  get loanList(): FormArray {
    return this.loanAppForm.get('loans') as FormArray;
  }
  addLoan() {
    this.loanList.push(this.createLoan());
  }
  removeLoan(index: number) {
    this.loanList.removeAt(index);
  }
  onSave() {
    const formValue = this.loanAppForm.value;
    this.commandService.onSaveLoan(formValue).subscribe((res: IApiResponse) => {
      if (res.result) {
        alert('Loan Application Submitted Successfully');
        this.loanAppForm.reset();
        this.initForm();
      } else {
        alert(res.message);
      }
    }),(error: any) => {
      alert('Error while submitting the loan application');
    }
  }
}
