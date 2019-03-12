import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';



@Injectable()

export class LoginService {

    constructor(@Inject("BASE_URL") private _baseUrl: string, private _httpClient: HttpClient) { }


    public logIn(body) {
        return this._httpClient.post(this._baseUrl + "users/login", body)
    }
}