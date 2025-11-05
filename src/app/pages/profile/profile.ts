import { Component } from '@angular/core';
import { ListNews } from '../../components/general-components/list-news/list-news';
import { NavigationBar } from '../../components/components-news/navigation-bar/navigation-bar';

@Component({
  selector: 'app-profile',
  imports: [ListNews, NavigationBar],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {}
