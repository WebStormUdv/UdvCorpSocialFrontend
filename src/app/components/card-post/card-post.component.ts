import { Component } from '@angular/core';
import { Observable, take } from 'rxjs';
import { UserService } from '../../services/user.service';
import { IUserData } from '../../interfaces/user-data.interface';
import { CommentService } from '../../services/posts.service';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.scss'
})
export class CardPostComponent {
  public userData$?: Observable<IUserData>
  
  constructor(private _userService: UserService, private _sevisePosts: CommentService){}

  public ngOnInit(): void {
    this.userData$ = this._userService.getUserData()
    this.userData$?.pipe(take(1)).subscribe()
    this._sevisePosts.getPost()

  }
}
