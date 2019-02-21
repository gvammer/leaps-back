import { Component, OnInit } from "@angular/core";
import { MenuItem } from '../../models/models';
import { MenuService } from '../../service/menu.service';
MenuService
@Component({
    selector: "app-left-menu",
    templateUrl: "left-menu.component.html",
    styleUrls: ["left-menu.component.scss"]

})

export class LeftMenuComponent implements OnInit {

    public menuItem: MenuItem[] =
        [
            { icon: "home", title: 'list', routerLink: "/home" },
            { icon: "table_chart", title: 'Roles', routerLink: "/roles" },
            { icon: "local_dining", title: "Permissions", routerLink: "/permissions" },
            // { icon: "person", title: "stuff", routerLink: "/staff" },
            // { icon: "place", title: "orders", routerLink: "#" },
            // { icon: "signal_cellular_alt", title: "statistic", routerLink: "/statistic" },
            { icon: "exit_to_app", title: "logout", routerLink: "/login" },

        ]

    constructor(public menuService: MenuService) { }

    ngOnInit() { }


}