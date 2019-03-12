import { Component, OnInit } from "@angular/core";
import { HomeService } from './home.service';
import { Certificates } from '../../../models/models';
import { Router } from '@angular/router';


@Component({
    selector: "app-home",
    templateUrl: "home.view.html",
    styleUrls: ["home.view.scss"]
})

export class HomeView implements OnInit {
    public certificates: Certificates;
    private _isInnerOpen: boolean = false;

    constructor(private _homeService: HomeService,private _router:Router) { }


    ngOnInit() {
        this._getUser();
    }

    private _getUser() {
        this._homeService.getUser()
            .subscribe((data: Certificates) => {
                this.certificates = data;
                console.log(this.certificates, "certificates");

            })
            
    }


    toggleInner(): void {
        this._isInnerOpen = !this._isInnerOpen;
    }

    get listItemData() {
        return this.certificates;
    }

    get isInnerOpen(): boolean {
        return this._isInnerOpen;
    }

    public openHumanItems(_id:string) {
        this._router.navigate(['human/' + _id]);
    }

}