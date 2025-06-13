import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable()
export class CommentService { 
  public IdPosts: string = ""
  public content?: Object

  constructor(private _userService: UserService, private _http: HttpClient){}

  //Получение постов
  public getPost():void {
    const HttpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this._userService.Token}`
      })
    }

    this._http.get<{ content: Object }>(this._userService.URL + "/api/posts", HttpOptions)
    .pipe(take(1)).subscribe({
      next: (result: { content: Object }) => {
        this.content = result.content
        console.log(this.content)
      },
      error: (error) => alert("Error")
    })
  }
  
  //Получение комментариев к постам
  public getComment():void {
    this._http.get(this._userService.URL + "", )
  }
}
