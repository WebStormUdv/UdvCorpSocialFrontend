import { Component, input } from '@angular/core';
import { NewsCard } from '../../components-news/news-card/news-card';
import { NewsService } from '../../../services/news.service';
import { Observable } from 'rxjs';
import { IPosts } from '../../../interfaces/news.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list-news',
  imports: [NewsCard, AsyncPipe],
  providers: [NewsService],
  templateUrl: './list-news.html',
  styleUrl: './list-news.scss',
})
export class ListNews {
  public posts$!: Observable<IPosts[]>;

  constructor(private _NewsService: NewsService) {
    this._NewsService.getPosts();
    this.posts$ = this._NewsService.posts$;
    this._NewsService.posts$.subscribe((result) => console.log(result));
  }
}
