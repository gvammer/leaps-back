import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Statuses } from '../../../models/models';


@Injectable()

export class TemplateService {

    constructor(@Inject("BASE_URL") private _baseUrl: string, private _httpClient: HttpClient, private _router: Router, private _cookieService: CookieService) { }


    public addDoctemplates(body) {
        let token = this._cookieService.get('token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.post(this._baseUrl + "admin/doctemplates", body, { headers })

    }

    public getDoctemplatesTypes() {
        return this._httpClient.get(this._baseUrl + "admin/doctemplates/types")
    }

    public getTemplates() {
        let token = this._cookieService.get('token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.get(this._baseUrl + "users/doctemplates?limit=1000", { headers })
    }

    public editTemplates(id: string, body) {
        let token = this._cookieService.get('token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        });
        return this._httpClient.put(this._baseUrl + "admin/doctemplates/" + id, body, { headers })
    }

    public deleteTemplate(id: string) {
        let token = this._cookieService.get('token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        });
        return this._httpClient.delete(this._baseUrl + "admin/doctemplates/" + id, { headers })
    }

    public getTmplateByType(type: string) {
        let token = this._cookieService.get('token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        });
        return this._httpClient.get(this._baseUrl + "users/doctemplates/" + type, { headers });
    }

    public getStatuses(): Observable<Statuses[]> {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        });
        return this._httpClient.get<Statuses[]>(this._baseUrl + "users/statuses?limit=1000", { headers }).pipe(
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