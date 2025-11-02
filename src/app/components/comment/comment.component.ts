import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { IUserData } from '../../interfaces/user.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  public userData$?: Observable<IUserData>;

  constructor(private _userService: UserService) {}

  public ngOnInit(): void {
    this.userData$ = this._userService.getUserData();
    console.log(this.userData$);
  }
}
