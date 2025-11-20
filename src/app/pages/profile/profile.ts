import { Component } from '@angular/core';
import { ListNews } from '../../components/general-components/list-news/list-news';
import { NavigationBar } from '../../components/components-news/navigation-bar/navigation-bar';
import { UserService } from '../../services/user.service';
import { IUserData } from '../../interfaces/user.interface';
import { Observable, take } from 'rxjs';
import { CommonModule, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [ListNews, NavigationBar, AsyncPipe],
  providers: [UserService],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  public userData$?: Observable<IUserData>;

  constructor(private _userService: UserService) {
    _userService
      .getUser()
      .pipe(take(1))
      .subscribe((result) => console.log(result));
    this.userData$ = _userService.getUser();
  }
}
