import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ILoginUser } from "../interfaces/user-login.interface";
import { Observable, take } from "rxjs";
import { IUserData } from "../interfaces/user-data.interface";

@Injectable()
export class UserService {
    public URL: string = "http://localhost:8080"
    public Token: string = sessionStorage.getItem("auth_token") || ""
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
                this.Token = result.token
                sessionStorage.setItem("auth_token", this.Token)
                sessionStorage.setItem("isLoggedIn", "true")
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

    //Идентификатор для админа
    public userAdmin(): boolean {
        const resultCheck: boolean = false 
        this.getUserData().pipe(take(1))
        .subscribe(result => {
            result.workStatus === "Admin"
        })
        return resultCheck
    }


}