import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()

export class RolesService {

    constructor(@Inject('BASE_URL') private _baseUrl: string, private _httpClient: HttpClient, private _cookieService: CookieService, private _router: Router) {

    }

    public getUserRoles() {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.get(this._baseUrl + "admin/roles?limit=1000", { headers }).pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));
    }

    public postRoles(body) {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.post(this._baseUrl + "admin/roles", body, { headers }).pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));
    }

    public getUserPermissions() {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.get(this._baseUrl + "users/permissions", { headers }).pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));
    }


    public updateRoles(roleId: string, body) {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.put(this._baseUrl + "admin/roles/" + roleId, body, { headers }).pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));
    }

    private _navToLogin(error) {
        if (error.error=='login_again') {
            this._router.navigate(['/login'])
        }
    }
}