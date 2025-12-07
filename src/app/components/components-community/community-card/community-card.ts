import { Component, inject, input } from '@angular/core';
import { ICommunities } from '../../../interfaces/community.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community-card',
  imports: [],
  templateUrl: './community-card.html',
  styleUrl: './community-card.scss',
})
export class CommunityCard {
  public community = input.required<ICommunities>();

  private _router = inject(Router);

  public redirectInCommunity(): void {
    this._router.navigate([`/community/${this.community().id}`]);
  }
}
