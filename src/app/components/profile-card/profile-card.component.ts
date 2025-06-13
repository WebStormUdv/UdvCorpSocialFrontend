import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUserData } from '../../interfaces/user-data.interface';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  public userData$?: Observable<IUserData>

  constructor(private _userService: UserService){}

  public ngOnInit(): void {
    this.userData$ = this._userService.getUserData()
    this.userData$?.pipe(take(1)).subscribe()
  }
}
