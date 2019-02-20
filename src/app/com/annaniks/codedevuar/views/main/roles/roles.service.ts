import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()

export class RolesService {

    constructor(@Inject('BASE_URL') private _baseUrl: string, private _httpClient: HttpClient) {

    }

    public getUserRoles() {
        return this._httpClient.get(this._baseUrl + "users/roles");
    }
}