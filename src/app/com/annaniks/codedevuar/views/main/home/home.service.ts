import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@Injectable()

export class HomeService {

    constructor(@Inject('BASE_URL') private _baseUrl: string, private _httpClient: HttpClient, private _cookieService: CookieService) { }

    public getUser() {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })

        return this._httpClient.get(this._baseUrl + "users/certificates", { headers });
    }

    public getUserById(id: string): Observable<object> {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.get(this._baseUrl + "users/certificates/" + id, { headers })
    }
}