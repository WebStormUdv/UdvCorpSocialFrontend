import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs';
import { IUserData } from '../../../interfaces/user.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [AsyncPipe],
  providers: [UserService],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  public userData$?: Observable<IUserData>;
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.userData$ = this._userService.getUser();
  }
}
