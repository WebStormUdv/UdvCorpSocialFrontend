import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICommunities, ICommunityReqwest } from '../interfaces/community.interface';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable()
export class CommunityService {
  private readonly apiUrl: string = 'http://localhost:8080';

  private subjectCommunities = new BehaviorSubject<ICommunities[]>([]);
  public communities$: Observable<ICommunities[]> = this.subjectCommunities.asObservable();

  constructor(private _http: HttpClient) {}

  public checkFilter(filterOption: string): void {
    if (filterOption === 'my') {
      this.getUserSubscribeCommunities();
    } else if (filterOption === 'recommended') {
      this.getRecommendedCommunities();
    } else {
    }
  }

  private getUserSubscribeCommunities(): void {
    this._http
      .get<ICommunityReqwest>(`${this.apiUrl}/api/communities/my`)
      .pipe(map((dataCommunities) => dataCommunities.content))
      .subscribe({
        next: (response) => this.subjectCommunities.next(response),
        error: (error) => console.log(error),
      });
  }

  private getRecommendedCommunities(): void {
    this._http
      .get<ICommunityReqwest>(`${this.apiUrl}/api/communities`)
      .pipe(map((dataCommunities) => dataCommunities.content))
      .subscribe({
        next: (response) => this.subjectCommunities.next(response),
        error: (error) => console.error(error),
      });
  }

  private getCreatedCommunities(): void {}
}
