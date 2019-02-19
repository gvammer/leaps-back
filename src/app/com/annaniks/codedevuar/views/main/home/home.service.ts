import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()

export class HomeService {

    constructor(@Inject('BASE_URL') private _baseUrl:string, private _httpClient: HttpClient) { }

    public getUser() {
        return this._httpClient.get(this._baseUrl + "users/certificates");
    }

    public getUserById(id: string):Observable<object> {
        return this._httpClient.get(this._baseUrl + "users/certificates/" + id)
    }
}