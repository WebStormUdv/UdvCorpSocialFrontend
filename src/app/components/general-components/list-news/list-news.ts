import { Component, input } from '@angular/core';
import { NewsCard } from '../../components-news/news-card/news-card';
import { NewsService } from '../../../services/news.service';
import { Observable } from 'rxjs';
import { IPosts } from '../../../interfaces/news.interface';
import { AsyncPipe } from '@angular/common';
import { Comments } from '../comments/comments';

@Component({
  selector: 'app-list-news',
  imports: [NewsCard, AsyncPipe, Comments],
  providers: [NewsService],
  templateUrl: './list-news.html',
  styleUrl: './list-news.scss',
})
export class ListNews {
  public readonly posts$ = input.required<Observable<IPosts[]>>();
}
