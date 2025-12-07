import { Component, OnInit } from '@angular/core';
import { NavigationBar } from '../../components/general-components/navigation-bar/navigation-bar';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ɵInternalFormsSharedModule,
} from '@angular/forms';
import { CommunityCard } from '../../components/components-community/community-card/community-card';
import { CommunityService } from '../../services/community.service';
import { ICommunities } from '../../interfaces/community.interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-communities',
  imports: [
    NavigationBar,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule,
    CommunityCard,
    AsyncPipe,
  ],
  providers: [CommunityService],
  templateUrl: './communities.html',
  styleUrl: './communities.scss',
})
export class Communities {
  public communities$!: Observable<ICommunities[]>;

  public sortForm: FormGroup = new FormGroup({
    sortOption: new FormControl('my'),
  });

  constructor(private _router: Router, private _communityService: CommunityService) {
    _communityService.checkFilter('my');
    this.communities$ = _communityService.communities$;
  }

  public moveCreateCommunity(): void {
    this._router.navigate(['/community/create']);
  }

  public moveCommunity(): void {
    this._router.navigate(['/community/']);
  }

  public getFilterOption(): void {
    const option: string = this.sortForm.get('sortOption')?.value;
    this._communityService.checkFilter(option);
  }
}
