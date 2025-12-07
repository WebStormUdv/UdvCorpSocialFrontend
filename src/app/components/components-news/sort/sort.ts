import { Component } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sort',
  imports: [ReactiveFormsModule],
  templateUrl: './sort.html',
  styleUrl: './sort.scss',
})
export class Sort {
  public sortOption: FormGroup = new FormGroup({
    timeNews: new FormControl<string>('new'),
  });

  public filterOption: FormGroup = new FormGroup({
    currentNews: new FormControl<string>('all'),
  });

  constructor(private _newsService: NewsService) {}

  public filterListNews(): void {
    const currentNews: string = this.filterOption.get('currentNews')?.value;
    this._newsService.filterListNews(currentNews);
  }

  public sortListNews(): void {
    const timeNews: string = this.sortOption.get('timeNews')?.value;
    this._newsService.sortListNews(timeNews);
  }
}
