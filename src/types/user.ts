/** @format */

export type UserDetails = {
  createdAt: Date;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: Date;
  profile: Profile;
  guarantor: Guarantor;
  accountBalance: string;
  accountNumber: string;
  socials: Socials;
  education: Education;
  id: string;
};

export type Education = {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
};

export type Guarantor = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
};

export type Profile = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
};

export type Socials = {
  facebook: string;
  instagram: string;
  twitter: string;
};
