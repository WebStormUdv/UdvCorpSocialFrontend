import { Routes } from '@angular/router';
import { LayoutNews } from './layouts/layout-news/layout-news';
import { Authorization } from './pages/authorization/authorization';
import { authorizationGuard } from './guards/authorization-guard';
import { NewsFeed } from './pages/news-feed/news-feed';
import { Profile } from './pages/profile/profile';
import { Error } from './pages/error/error';

export const routes: Routes = [
  {
    path: 'authorization',
    component: Authorization,
  },
  {
    path: '',
    component: LayoutNews,
    canActivate: [authorizationGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'news-feed' },
      { path: 'news-feed', component: NewsFeed },
      { path: 'profile', component: Profile },
      { path: '**', component: Error },
    ],
  },
  { path: '**', redirectTo: '' },
];
