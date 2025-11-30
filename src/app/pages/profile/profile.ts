import { Component, OnInit } from '@angular/core';
import { ListNews } from '../../components/general-components/list-news/list-news';
import { NavigationBar } from '../../components/general-components/navigation-bar/navigation-bar';
import { UserService } from '../../services/user.service';
import { IUserData } from '../../interfaces/user.interface';
import { Observable, switchMap, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { NewsService } from '../../services/news.service';
import { IPosts } from '../../interfaces/news.interface';

@Component({
  selector: 'app-profile',
  imports: [ListNews, NavigationBar, AsyncPipe],
  providers: [UserService, NewsService],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  public userData$?: Observable<IUserData>;
  public posts$!: Observable<IPosts[]>;

  constructor(private _userService: UserService, private _newsService: NewsService) {
    this.userData$ = _userService.getUser();

    this.posts$ = this.userData$.pipe(
      switchMap((userData) => {
        const employId: number = userData.id;
        this._newsService.checkPath(employId);
        return this._newsService.posts$;
      })
    );
  }
}
