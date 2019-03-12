import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()

export class HomeService {

    constructor(@Inject('BASE_URL') private _baseUrl: string, private _httpClient: HttpClient, private _cookieService: CookieService, private _router: Router) { }

    public getUser() {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })

        return this._httpClient.get(this._baseUrl + "admin/certificates?limit=1000", { headers }).pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));;
    }

    public getUserById(id: string): Observable<object> {
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.get(this._baseUrl + "admin/certificates/" + id, { headers }).pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));
    }

    private _navToLogin(error): void {
        if (error.error == 'login_again') {
            this._router.navigate(['/login'])
        }
    }

    public certificatesStatuses(certificatesId:string,body){
        let token = this._cookieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.put(this._baseUrl+'users/certificates/' +certificatesId+"/status",body,{headers})
    }
}