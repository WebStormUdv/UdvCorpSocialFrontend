import { Component, input, OnInit } from '@angular/core';
import { IPosts } from '../../../interfaces/news.interface';
import { UserService } from '../../../services/user.service';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-news-card',
  imports: [],
  providers: [UserService],
  templateUrl: './news-card.html',
  styleUrl: './news-card.scss',
})
export class NewsCard implements OnInit {
  public readonly post = input.required<IPosts>();
  public date!: string;
  public time!: string;

  constructor(private _newsService: NewsService) {}

  ngOnInit() {
    const dateObj: Date = new Date(this.post().timestamp);

    this.date = this.formatDate(dateObj);
    this.time = this.formatTime(dateObj);
  }

  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  private formatTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  public setLike(): void {
    this._newsService.toggleLike(this.post());
  }
}
