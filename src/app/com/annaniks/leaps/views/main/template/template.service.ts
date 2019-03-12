import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@Injectable()

export class TemplateService {

    constructor(@Inject("BASE_URL") private _baseUrl: string, private _httpClient: HttpClient, private _cookieService: CookieService) { }


    public addDoctemplates(body) {
        let token = this._cookieService.get('token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.post(this._baseUrl + "admin/doctemplates", body, { headers })

    }

}