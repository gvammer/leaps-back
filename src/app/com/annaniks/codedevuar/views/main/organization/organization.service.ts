import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()

export class OrganizationService {


    constructor(@Inject('BASE_URL') private _baseUrl: string, private _httpClient: HttpClient, private _cookieService: CookieService, private _router: Router) {

    }

    getusersOrganization() {
        return this._httpClient.get(this._baseUrl + "users/organizations?limit=1000").pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));;
    }

    postOrganization(body) {
        let token = this._cookieService.get('token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.post(this._baseUrl + "admin/organizations", body, { headers }).pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));
    }

    putOrganization(id: string, body) {
        let token = this._cookieService.get('token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.put(this._baseUrl + "admin/organizations/" + id, body, { headers }).pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));
    }

    private _navToLogin(error) {
        if (error.error == 'login_again') {
            this._router.navigate(['/login'])
        }
    }
}