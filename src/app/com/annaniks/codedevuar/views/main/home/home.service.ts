import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class HomeService {

    constructor(@Inject('BASE_URL') private _baseUrl, private _httpClient: HttpClient) { }
    public getUser() {
        return this._httpClient.get(this._baseUrl + "users/certificates");
    }
}