import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    selector: "app-login",
    templateUrl: "login.view.html",
    styleUrls: ["login.view.scss"]
})

export class LoginView implements OnInit {

    public signInGroup: FormGroup;

    constructor(private _loginService: LoginService,private _router:Router) { }

    ngOnInit() {
        this._formBuilder();
    }


    private _formBuilder(): void {
        this.signInGroup = new FormBuilder().group({
            login: ["1008", Validators.required],
            password: ["123456", Validators.required]
        })
    }

    public loginUser() {
        this._loginService.logIn({
            uniqueID: this.signInGroup.value.login,
            password: this.signInGroup.value.password,
        }).subscribe((data) => {
this._router.navigate(["/home"])
            console.log(data);

        })
    }
}