import { Component, OnInit } from "@angular/core";
import { RolesService } from './roles.service';
import { MatDialog } from '@angular/material/dialog';
import {  AddRolesModals } from '../../../modals';
import { Role, Permission } from '../../../models/models';


@Component({
    selector: "app-roles",
    templateUrl: "roles.view.html",
    styleUrls: ["roles.view..scss"]
})

export class RolesView implements OnInit {

    public rolesDada: Role;
    constructor(private _rolesService: RolesService, private _matDialog: MatDialog) { }

    ngOnInit() {
        this._getUsersRoles();
    }


    private _getUsersRoles() {
        this._rolesService.getUserRoles()
            .subscribe((data: Role) => {
                this.rolesDada = data;
                console.log(this.rolesDada.name);

            })
    }

    public openRolesModals(): void {
        const dialogRf = this._matDialog.open(AddRolesModals, {
            width: "686px",
            height: "444px",
        })
    }
    public openCreatRoles(item): void {
        const dialogRef = this._matDialog.open(AddRolesModals, {
            width: "686px",
            height: "444px",
            data: {
                editable: true,
                data: item,

            }
        });
        dialogRef.afterClosed()
            .subscribe(data => {
                if (data == "update") {
                    this._getUsersRoles();
                }
            })
    }
}