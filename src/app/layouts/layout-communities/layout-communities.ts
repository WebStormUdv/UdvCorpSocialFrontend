import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../components/general-components/header/header';
import { NavigationBar } from '../../components/components-news/navigation-bar/navigation-bar';

@Component({
  selector: 'app-layout-communities',
  imports: [RouterOutlet, Header],
  templateUrl: './layout-communities.html',
  styleUrl: './layout-communities.scss',
})
export class LayoutCommunities {}
