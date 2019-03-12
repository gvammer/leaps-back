import { Component, OnInit } from "@angular/core";
import { MenuService } from '../../service/menu.service';


@Component({
    selector: "app-toolbar",
    templateUrl: "toolbar.component.html",
    styleUrls: ["toolbar.component.scss"]
})

export class ToolBarComponent implements OnInit {

    constructor(public menuService: MenuService) { }

    ngOnInit() { }


}