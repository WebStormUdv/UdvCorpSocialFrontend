import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPosts, IPostsResponse } from '../interfaces/news.interface';
import { BehaviorSubject, catchError, of, take } from 'rxjs';

@Injectable()
export class NewsService {
  private readonly apiUrl: string = 'http://localhost:8080';

  private postsSubject: BehaviorSubject<IPosts[]> = new BehaviorSubject<IPosts[]>([]);
  public posts$ = this.postsSubject.asObservable();

  constructor(private _http: HttpClient) {}

  public getPosts(): void {
    this._http.get<IPostsResponse>(this.apiUrl + '/api/posts').subscribe({
      next: (response) => {
        this.postsSubject.next(response.content);
      },
      error: (error) => {
        console.error('Bad get status', error);
      },
    });
  }

  public savePost(postData: FormData) {}

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
}
