export interface ILoan {
  applicantID: number;
  fullName: string;
  applicationStatus: string;
  panCard: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  annualIncome: number;
  employmentStatus: string;
  creditScore: number;
  assets: string;
  dateApplied: string;
  Loans: Loan[];
  customerId: number;
}

export interface Loan {
  loanID: number;
  applicantID: number;
  bankName: string;
  loanAmount: number;
  emi: number;
}

export interface IApiResponse {
  message: string;
  result: boolean;
  data: any;
}
