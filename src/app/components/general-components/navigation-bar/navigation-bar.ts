import { Component, OnChanges, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  imports: [RouterModule],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss',
})
export class NavigationBar {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event.constructor.name === 'NavigationEnd') {
        this.updateActiveLink(this.router.url);
      }
    });
  }
  private updateActiveLink(url: string): void {
    switch (url) {
      case '/news-feed':
        const newsElement = document.querySelector('.profile_news_line') as HTMLElement;
        if (newsElement) newsElement.style.backgroundColor = '#00c08b';
        break;
      case '/profile':
        const profileElement = document.querySelector('.profile_line') as HTMLElement;
        if (profileElement) profileElement.style.backgroundColor = '#00c08b';
        break;
      case '/community/list':
      case '/community/create':
        const communityElement = document.querySelector('.profile_group_line') as HTMLElement;
        if (communityElement) communityElement.style.backgroundColor = '#00c08b';
        break;
    }
  }
  ngOnInit(): void {
    this.updateActiveLink(this.router.url);
  }
}
