import { Component, OnInit } from "@angular/core";
import { MenuItem } from '../../models/models';
import { MenuService } from '../../service/menu.service';

@Component({
    selector: "app-left-menu",
    templateUrl: "left-menu.component.html",
    styleUrls: ["left-menu.component.scss"]

})

export class LeftMenuComponent implements OnInit {

    public menuItem: MenuItem[] =
        [
            { icon: "home", title: 'list', routerLink: "/home" },
            { icon: "bookmark", title: 'template', routerLink: "/template" },
            { icon: "table_chart", title: 'Roles', routerLink: "/roles" },
            { icon: "local_dining", title: "Permissions", routerLink: "/permissions" },
            { icon: "person", title: "Organizations", routerLink: "/organization" },
            { icon: "place", title: "Statuses", routerLink: "/statuses" },
             { icon: "signal_cellular_alt", title: "users", routerLink: "/users" },
            { icon: "exit_to_app", title: "logout", routerLink: "/login" },

        ]

    constructor(public menuService: MenuService) { }

    ngOnInit() { }


}