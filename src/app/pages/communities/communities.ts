import { Component } from '@angular/core';
import { NavigationBar } from '../../components/components-news/navigation-bar/navigation-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-communities',
  imports: [NavigationBar],
  templateUrl: './communities.html',
  styleUrl: './communities.scss',
})
export class Communities {
  constructor(private _router: Router) {}

  public moveCreateCommunity(): void {
    this._router.navigate(['/community/create']);
  }

  public moveCommunity(): void {
    this._router.navigate(['/community/']);
  }
}
