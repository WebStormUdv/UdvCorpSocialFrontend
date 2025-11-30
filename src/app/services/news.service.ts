import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPosts, IPostsResponse, IUserPosts } from '../interfaces/news.interface';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { IUserData } from '../interfaces/user.interface';

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
      console.log(employId);
      this.getUserPosts(employId);
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
    const url = `${this.apiUrl}/api/posts/${post.id}/likes`;

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

  public filter(): void {}
}
