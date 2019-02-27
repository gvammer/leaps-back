import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@Injectable()

export class StatusesService {

    constructor(@Inject('BASE_URL') private _baseUrl: string, private _httpClient: HttpClient, private _cookieService: CookieService) { }


    public postAdminStatuses(body) {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.post(this._baseUrl + "admin/statuses", body, { headers })
    }

    public getStatuses() {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        });
        return this._httpClient.get(this._baseUrl + "users/statuses", { headers })
    }

    public getUserRoles() {
        return this._httpClient.get(this._baseUrl + "users/roles?limit=1000");
    }
}