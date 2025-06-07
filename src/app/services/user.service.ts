import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ILoginUser } from "../interfaces/user-login.interface";
import { Observable, take } from "rxjs";
import { IUserData } from "../interfaces/user-data.interface";

@Injectable()
export class UserService {
    protected URL: string = "http://localhost:8080"
    public Token: string = ""
    public UserData$?: Observable<IUserData>;

    constructor(private _http: HttpClient, private _router: Router){}

    //Проверка данных авторизации
    public authUser(userLoginData: ILoginUser): void {
        let Data = {
            email: userLoginData.login,
            password: userLoginData.password
        }

        this._http.post<{ token: string }>(this.URL + "/api/auth/login", Data).pipe(take(1))
        .subscribe({
            next: (result: { token: string }) => {
                console.log(result.token)
                this.Token = result.token
                this._router.navigate(["/news_feed"])
            },
            error: (error) => alert("Неправильные данные")
        })
    }

    //Получение данных пользователя
    public getUserData(): Observable<IUserData> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${this.Token}`
            })
        }
        return this._http.get<IUserData>(this.URL + "/api/employees/me", httpOptions)
    }

    //Идентификатор для Guard
    isAuthenticated(): boolean {
        return sessionStorage.getItem("isLoggedIn") === "true"
    }


}