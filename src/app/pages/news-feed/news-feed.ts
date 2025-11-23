import { Component, OnInit } from '@angular/core';
import { NavigationBar } from '../../components/components-news/navigation-bar/navigation-bar';
import { CreateNews } from '../../components/components-news/create/create';
import { Sort } from '../../components/components-news/sort/sort';
import { ListNews } from '../../components/general-components/list-news/list-news';
import { CreateNewsModal } from '../../components/components-news/create-news-modal/create-news-modal';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';
import { IPosts } from '../../interfaces/news.interface';

@Component({
  selector: 'app-news-feed',
  imports: [NavigationBar, CreateNews, Sort, ListNews, CreateNewsModal],
  providers: [NewsService],
  templateUrl: './news-feed.html',
  styleUrl: './news-feed.scss',
})
export class NewsFeed {
  public viewModalEvent(state: boolean) {
    const elementModal = document.querySelector('.modal_create_news') as HTMLElement;
    const elementMain = document.querySelector('.news-feed') as HTMLElement;
    const elementHeader = document.querySelector('.app-header') as HTMLElement;

    if (!elementModal) {
      console.error('elementModal with class "modal_create_news" not found!');
      return;
    }

    if (state === false) {
      state = true;
      elementModal.style.display = 'flex';
      elementMain.style.opacity = '50%';
      elementHeader.style.opacity = '50%';
    } else {
      state = false;
      elementModal.style.display = 'none';
      elementMain.style.opacity = '100%';
      elementHeader.style.opacity = '100%';
    }
    console.log(state);
  }
}
