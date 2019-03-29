import {Injectable} from "@angular/core";
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../views/login/login.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@Injectable()



export class AuthGuard implements CanActivate{

    constructor(private _router:Router,private _cookieService:CookieService){}

    canActivate():Observable<boolean> | Promise<boolean> | boolean{
    if(this._cookieService.get('token')){
        return true;
    }
    else{
        this._router.navigate(['/login'])
        return false;
    }
    }

}