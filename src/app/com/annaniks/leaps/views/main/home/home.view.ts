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
    public certificates: Certificates[] = [];
    public certificatesItem: Certificates[] = [];
    private _isInnerOpen: boolean = false;
    public pageLength: number = 5;
    public page: number = 1;


    constructor(private _homeService: HomeService, private _router: Router) { }


    ngOnInit() {
        this._getUser();
    }

    public onChangeCertificates($event): void {
        this.page = $event.pageNumber;
        this.certificatesItem = this.certificates.slice((this.page - 1) * this.pageLength, this.page * this.pageLength)
    }

    private _getUser() {
        this._homeService.getUser()
            .subscribe((data: Certificates[]) => {
                this.certificates = data;
                this.certificatesItem = this.certificates.slice((this.page - 1) * this.pageLength, this.page * this.pageLength)
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

    public openHumanItems(_id: string) {
        this._router.navigate(['human/' + _id]);
    }

}