import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()

export class OrganizationService {


    constructor(@Inject('BASE_URL') private _baseUrl: string, private _httpClient: HttpClient, private _cookieService: CookieService) {

    }

    getusersOrganization() {
        return this._httpClient.get(this._baseUrl + "users/organizations?limit=1000");
    }

    postOrganization(body) {
        let token = this._cookieService.get('token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.post(this._baseUrl + "admin/organizations", body, { headers })
    }

    putOrganization(id: string, body) {
        let token = this._cookieService.get('token')
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.put(this._baseUrl + "admin/organizations/" + id, body, { headers })
    }
}