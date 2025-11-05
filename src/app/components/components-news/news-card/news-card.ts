import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserData } from '../../../interfaces/user.interface';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-news-card',
  imports: [],
  providers: [NewsService],
  templateUrl: './news-card.html',
  styleUrl: './news-card.scss',
})
export class NewsCard {
  public card$?: Observable<IUserData>;

  constructor(private _servicePosts: NewsService) {}

  public ngOnInit(): void {}
}
