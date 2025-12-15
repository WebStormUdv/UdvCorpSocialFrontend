import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CommentsService {
  private readonly apiUrl: string = 'http://localhost:8080';

  private subjectComments = new BehaviorSubject([]);
  public comments$ = this.subjectComments.asObservable();

  constructor(private _http: HttpClient) {}

  public getComments(postId: number): void {
    const url: string = `${this.apiUrl}/api/posts/${postId}/comments`;

    this._http.get(url).subscribe({
      next: (response) => {
        // console.log(response);
      },
      error: (error) => console.log(error, sessionStorage.getItem('authToken')),
    });
  }
}
