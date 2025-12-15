import { Component } from '@angular/core';
import { CommunityProfile } from '../../components/components-community/community-profile/community-profile';
import { NavigationBar } from '../../components/general-components/navigation-bar/navigation-bar';
import { UserList } from '../../components/components-community/user-list/user-list';
import { ListNews } from '../../components/general-components/list-news/list-news';
import { IPosts } from '../../interfaces/news.interface';
import { Observable, take, tap } from 'rxjs';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-community',
  imports: [CommunityProfile, NavigationBar, UserList, ListNews],
  providers: [NewsService],
  templateUrl: './community.html',
  styleUrl: './community.scss',
})
export class Community {
  public readonly posts$!: Observable<IPosts[]>;

  constructor(private _newsService: NewsService, private _route: ActivatedRoute) {
    this.posts$ = this._newsService.posts$;
  }

  ngOnInit(): void {
    // Используем tap для side-эффектов
    this._route.paramMap
      .pipe(
        take(1),
        tap((params) => {
          const id = params.get('id');
          if (id !== null) {
            this._newsService.checkPath(+id);
          }
        })
      )
      .subscribe();
  }
}
