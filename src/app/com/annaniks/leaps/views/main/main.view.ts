import { Component, OnInit } from "@angular/core";
import { MenuService } from '../../service/menu.service';


@Component({
    selector: "app-main",
    templateUrl: "main.view.html",
    styleUrls: ["main.view.scss"]
})

export class MainView implements OnInit {

    constructor(public menuService:MenuService) { }

    ngOnInit() { }
}