import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@Injectable()

export class UsersService {

    constructor(@Inject('BASE_URL') private _baseUrl: string, private _httpClient: HttpClient, private _cookieService: CookieService) {

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
        return this._httpClient.put(this._baseUrl + "admin/users/" + userId + "/account", {}, { headers })
    }

    public getRoles() {
        return this._httpClient.get(this._baseUrl + "users/roles?limit=1000");
    }

    public getOrganization() {
        return this._httpClient.get(this._baseUrl + "users/organizations?limit=1000");
    }

    public postUsers(body) {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.post(this._baseUrl + "users/reg", body, { headers })
    }
}