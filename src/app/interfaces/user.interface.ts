import { FormControl } from '@angular/forms';

export interface IUserData {
  aboutMe: string;
  birthday: string | null;
  city: string;
  departmentName: string;
  email: string;
  employmentStatus: string;
  fullName: string;
  hobbies: string;
  id: number;
  legalEntityName: string;
  mattermost: string;
  onlineStatus: boolean;
  photoUrl: string | null;
  position: string;
  profileLevel: string;
  projectNames: string[];
  statusComment: string;
  statusState: string;
  subdivisionName: string;
  supervisorName: string;
  telegram: string;
  workStatus: string;
  workplace: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}
