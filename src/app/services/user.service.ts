import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginData, IUserData } from '../interfaces/user.interface';
import { Observable, take } from 'rxjs';

@Injectable()
export class UserService {
  private readonly apiUrl: string = 'http://localhost:8080';
  protected token?: string = sessionStorage.getItem('authToken') || '';
  constructor(protected _http: HttpClient, protected _router: Router) {}

  public authUser(userLoginData: ILoginData): void {
    this._http
      .post<{ token: string }>(this.apiUrl + '/api/auth/login', userLoginData)
      .pipe(take(1))
      .subscribe(
        (response) => {
          sessionStorage.setItem('authToken', response['token']);
          this._router.navigate(['/news-feed']);
        },
        (error) => console.error('error: ' + error)
      );
  }

  public getUser(): Observable<IUserData> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    };
    return this._http.get<IUserData>(this.apiUrl + '/api/employees/me', httpOptions);
  }
}
