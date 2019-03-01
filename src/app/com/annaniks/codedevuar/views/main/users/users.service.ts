import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()

export class UsersService {

    constructor(@Inject('BASE_URL') private _baseUrl: string, private _httpClient: HttpClient, private _cookieService: CookieService, private _router: Router) {

    }


    public getUsers() {
        return this._httpClient.get(this._baseUrl + "users?limit=1000")
    }

    public addUsersactive(userId: string, body) {
        let token = this._cookieService.get('token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.put(this._baseUrl + "admin/users/" + userId + "/account", {}, { headers }).pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));;
    }

    public getRoles() {
        return this._httpClient.get(this._baseUrl + "users/roles?limit=1000").pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));
    }

    public getOrganization() {
        return this._httpClient.get(this._baseUrl + "users/organizations?limit=1000").pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));
    }

    public postUsers(body) {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.post(this._baseUrl + "users/reg", body, { headers }).pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));;
    }

    private _navToLogin(error) {
        if (error.error == "login_again") {
            this._router.navigate(['/login'])
        }
    }
}