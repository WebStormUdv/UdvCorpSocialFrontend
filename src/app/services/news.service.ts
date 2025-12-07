import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPosts, IPostsResponse, IUserPosts } from '../interfaces/news.interface';
import { BehaviorSubject, catchError, map, Observable, of, take } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class NewsService {
  private readonly apiUrl: string = 'http://localhost:8080';

  private postsSubject: BehaviorSubject<IPosts[]> = new BehaviorSubject<IPosts[]>([]);
  public posts$: Observable<IPosts[]> = this.postsSubject.asObservable();

  constructor(private _http: HttpClient, private _router: Router) {}

  public checkPath(employId?: number): void {
    const activePath: string = this._router.url;
    if (activePath === '/news-feed') {
      this.getPosts();
    } else if (activePath === '/profile') {
      this.getMyPosts();
    }
    // else if (activePath === `/community/${id}`){}
  }

  private getPosts(): void {
    const url: string = `${this.apiUrl}/api/posts`;

    this._http.get<IPostsResponse>(url).subscribe({
      next: (response) => {
        this.postsSubject.next(response.content);
      },
      error: (error) => {
        console.error('Bad get status', error);
      },
    });
  }

  private getMyPosts(): void {
    const url: string = `${this.apiUrl}/api/employees/mine/posts`;

    this._http.get<IUserPosts>(url).subscribe({
      next: (response) => {
        this.postsSubject.next(response._embedded.postDtoList);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  private getUserPosts(employId?: number): void {
    const url: string = `${this.apiUrl}/api/employees/${employId}/posts`;

    this._http.get<IUserPosts>(url).subscribe({
      next: (response) => {
        this.postsSubject.next(response._embedded.postDtoList);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  private getCommunityPosts(communityId: number) {
    const url: string = ``;
  }

  public savePost(postData: FormData) {
    const url: string = `${this.apiUrl}/api/posts`;

    this._http.post(url, postData).subscribe({
      next: (response) => {
        console.log('save post is done');
      },
      error: (error) => {
        console.log('don,t save post because: ' + error);
      },
    });
  }

  public toggleLike(post: IPosts): void {
    const url: string = `${this.apiUrl}/api/posts/${post.id}/likes`;

    const updatedPosts = this.postsSubject.value.map((p) =>
      p.id === post.id
        ? {
            ...p,
            liked: !post.liked,
            likesCount: p.likesCount + (post.liked ? -1 : 1),
          }
        : p
    );
    this.postsSubject.next(updatedPosts);

    const request$ = post.liked ? this._http.delete(url) : this._http.post(url, {});

    request$
      .pipe(
        catchError((err) => {
          console.error('Like error', err);
          this.postsSubject.next(
            this.postsSubject.value.map((p) => (p.id === post.id ? { ...p, liked: post.liked } : p))
          );
          return of(null);
        })
      )
      .subscribe();
  }

  public filterListNews(filterOption: string): void {
    if (filterOption === 'all') {
      this.getPosts();
    } else if (filterOption === 'my') {
      this.getMyPosts();
    } else {
      this.getPosts();
    }
  }

  public sortListNews(sortOption: string): void {
    const currentPosts: IPosts[] = [...this.postsSubject.value];

    const sortedPosts = currentPosts.sort((a, b) => {
      const timestampA = new Date(a.timestamp).getTime();
      const timestampB = new Date(b.timestamp).getTime();

      if (sortOption === 'new') {
        return timestampB - timestampA;
      } else {
        return timestampA - timestampB;
      }
    });

    this.postsSubject.next(sortedPosts);
  }
}
