import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ILoginUser } from '../../interfaces/user-login.interface';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent {

  constructor(private _userService: UserService){}

  public dataUser: FormGroup = new FormGroup({
    login: new FormControl<string>("", Validators.required),
    password: new FormControl<string>("", Validators.required)
  })

  public checkForm(): void {
    const userLoginData: ILoginUser = {
      login: this.dataUser.controls["login"].value,
      password: this.dataUser.controls["password"].value
    }
    this._userService.authUser(userLoginData)
  }
}