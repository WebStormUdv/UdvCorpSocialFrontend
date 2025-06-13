import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './pages/authorization/authorization.component';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { authorizationGuard } from './guards/authorization.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "authorization",
    pathMatch: "full"
  },
  {
    path: "authorization",
    component: AuthorizationComponent,
  },
  {
    path: "news_feed",
    component: NewsFeedComponent,
    canActivate: [authorizationGuard]
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [authorizationGuard]
  },
  {
    path: "**",
    component: Error
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
