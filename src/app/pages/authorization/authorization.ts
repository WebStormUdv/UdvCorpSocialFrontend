import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ILoginData, ILoginForm } from '../../interfaces/user.interface';

@Component({
  selector: 'app-authorization',
  imports: [ReactiveFormsModule],
  providers: [UserService],
  templateUrl: './authorization.html',
  styleUrl: './authorization.scss',
})
export class Authorization {
  constructor(private _userService: UserService) {}

  public dataUser: FormGroup<ILoginForm> = new FormGroup<ILoginForm>({
    email: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    password: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
  });

  public checkForm(): void {
    const userLoginData: ILoginData = this.dataUser.getRawValue();
    this._userService.authUser(userLoginData);
  }
}
