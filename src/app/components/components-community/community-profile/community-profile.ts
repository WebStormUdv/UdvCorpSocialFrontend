import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../../../services/community.service';
import { Observable, switchMap, take, throwError } from 'rxjs';
import { ICommunities } from '../../../interfaces/community.interface';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-community-profile',
  imports: [AsyncPipe],
  providers: [CommunityService],
  templateUrl: './community-profile.html',
  styleUrl: './community-profile.scss',
})
export class CommunityProfile implements OnInit {
  public communityData$?: Observable<ICommunities>;
  constructor(private _communityService: CommunityService, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.communityData$ = this._route.paramMap.pipe(
      take(1),
      switchMap((params) => {
        const id = params.get('id');

        if (id === null) {
          return throwError(() => new Error('ID not found in route parameters'));
        }

        const communityId = +id;
        return this._communityService.getCommunityById(communityId);
      })
    );
  }
}
