import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { IUserData } from '../../interfaces/user-data.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public userData$?: Observable<IUserData>

  constructor(private _userService: UserService){}

  public ngOnInit(): void {
    this.userData$ = this._userService.getUserData()
    console.log(this.userData$)
  }
}
