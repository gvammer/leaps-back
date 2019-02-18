import { Component, OnInit } from "@angular/core";
import { HomeService } from './home.service';


@Component({
    selector: "app-home",
    templateUrl: "home.view.html",
    styleUrls: ["home.view.scss"]
})

export class HomeView implements OnInit {
    public certificates: Array<any>;

    constructor(private _homeService: HomeService) { }


    ngOnInit() {
        this._getUser();
    }

    private _getUser() {
        this._homeService.getUser()
            .subscribe((data: any) => {
                this.certificates = data;
                console.log(this.certificates);

            })
    }

}