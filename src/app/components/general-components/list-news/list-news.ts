import { Component } from '@angular/core';
import { NewsCard } from '../../components-news/news-card/news-card';

@Component({
  selector: 'app-list-news',
  imports: [NewsCard],
  templateUrl: './list-news.html',
  styleUrl: './list-news.scss',
})
export class ListNews {}
