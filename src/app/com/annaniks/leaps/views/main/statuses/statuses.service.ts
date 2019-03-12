import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()

export class StatusesService {

    constructor(@Inject('BASE_URL') private _baseUrl: string, private _httpClient: HttpClient, private _cookieService: CookieService, private _router: Router) { }


    public postAdminStatuses(body) {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.post(this._baseUrl + "admin/statuses", body, { headers }).pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));;
    }

    public getStatuses() {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        });
        return this._httpClient.get(this._baseUrl + "users/statuses?limit=1000", { headers }).pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));;
    }
    public delete(_id:string){
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.delete(this._baseUrl + "admin/statuses/"+_id, { headers });
    }
    public getUserRoles() {
        return this._httpClient.get(this._baseUrl + "users/roles?limit=1000");
    }

    public updateStutuses(statusId: string, body) {
        console.log(body, '------');
        
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        });
        return this._httpClient.put(this._baseUrl + "admin/statuses/" + statusId, body, { headers }).pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));;
    }

    private _navToLogin(error) {
        if (error.error == 'login_again') {
            this._router.navigate(['/login'])
        }
    }
}

