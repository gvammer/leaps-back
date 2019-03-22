import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: "app-login",
    templateUrl: "login.view.html",
    styleUrls: ["login.view.scss"]
})

export class LoginView implements OnInit {

    public signInGroup: FormGroup;

    constructor(private _loginService: LoginService, private _router: Router, private _cookieService: CookieService, private _dialog: MatDialog) { }

    ngOnInit() {
        this._formBuilder();
    }


    private _formBuilder(): void {
        this.signInGroup = new FormBuilder().group({
            login: ["1042", Validators.required],
            password: ["123456", Validators.required]
        })
    }

    public loginUser() {
        this._loginService.logIn({
            uniqueID: this.signInGroup.value.login,
            password: this.signInGroup.value.password,
        }).subscribe((data: any) => {
            this._cookieService.put('token', data.token)
            this._router.navigate(["/home"])
            console.log(data);

        })
    }

}