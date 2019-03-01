import { Injectable, Inject } from "@angular/core";
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role, Permission } from '../../../models/models';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()

export class PermissionsService {

    constructor(@Inject("BASE_URL") private _baseUrl: string, private _coolieService: CookieService, private _httpClient: HttpClient, private _router: Router) { }


    public getUserRoles(): Observable<Role[]> {
        return this._httpClient.get<Role[]>(this._baseUrl + "users/roles").pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));
    }

    public getUserPermissions(): Observable<Permission[]> {
        let token = this._coolieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        })
        return this._httpClient.get<Permission[]>(this._baseUrl + "users/permissions", { headers }).pipe(
            catchError((error) => {
                this._navToLogin(error);
                throw (error);
            }));;
    }

    public putUserPermissions(roleId: string, body) {
        let token = this._coolieService.get('token');
        let headers = new HttpHeaders({
            'Content-type': 'application/json',
            'token': token,
        });
        return this._httpClient.put(this._baseUrl + "admin/roles/" + roleId + '/permissions', body, { headers })
            .pipe(
                catchError((error) => {
                    console.log(error);
                    this._navToLogin(error);
                    throw (error);
                }));;
    }

    private _navToLogin(error) {
        if (error.error == 'login_again') {
            this._router.navigate(['/login']);
        }
    }
}
