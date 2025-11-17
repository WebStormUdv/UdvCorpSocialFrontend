import { Routes } from '@angular/router';
import { LayoutNews } from './layouts/layout-news/layout-news';
import { Authorization } from './pages/authorization/authorization';
import { authorizationGuard } from './guards/authorization-guard';
import { NewsFeed } from './pages/news-feed/news-feed';
import { Profile } from './pages/profile/profile';
import { Error } from './pages/error/error';
import { LayoutCommunities } from './layouts/layout-communities/layout-communities';
import { Communities } from './pages/communities/communities';
import { CreateCommunity } from './pages/create-community/create-community';
import { EditCommunity } from './pages/edit-community/edit-community';

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
    ],
  },
  {
    path: 'community',
    component: LayoutCommunities,
    canActivate: [authorizationGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: Communities,
      },
      {
        path: 'create',
        component: CreateCommunity,
      },
      {
        path: 'edit',
        component: EditCommunity,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
