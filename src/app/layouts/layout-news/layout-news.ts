import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../components/general-components/header/header';

@Component({
  selector: 'app-layout-news',
  imports: [RouterOutlet, Header],
  templateUrl: './layout-news.html',
  styleUrl: './layout-news.scss',
})
export class LayoutNews {}
