import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { pipe } from '@angular/core/src/render3';
import { map } from 'rxjs/operators';



@Injectable()

export class LoginService {
    public isAuthorized:boolean=true;

    constructor(@Inject("BASE_URL") private _baseUrl: string, private _httpClient: HttpClient) { }


    public logIn(body) {
        this.isAuthorized=true;
        return this._httpClient.post(this._baseUrl + "users/login", body)
    }
}