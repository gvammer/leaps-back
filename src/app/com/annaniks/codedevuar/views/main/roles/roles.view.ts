import { Component, OnInit } from "@angular/core";
import { RolesService } from './roles.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateRolesModals, AddPermissions, AddRolesModals } from '../../../modals';

@Component({
    selector: "app-roles",
    templateUrl: "roles.view.html",
    styleUrls: ["roles.view..scss"]
})

export class RolesView implements OnInit {

    public rolesDada: any;
    constructor(private _rolesService: RolesService, private _matDialog: MatDialog) { }

    ngOnInit() {
        this._getUsersRoles();
    }


    private _getUsersRoles() {
        this._rolesService.getUserRoles()
            .subscribe((data: any) => {
                this.rolesDada = data;
                console.log(this.rolesDada);

            })
    }

    public openRolesModals(): void {
        const dialogRf = this._matDialog.open(AddRolesModals, {
            width: "686px",
            height: "444px",
        })
    }

    public openAddPermissions(): void {
        const dialogRef = this._matDialog.open(AddPermissions, {
            width: "500px",
            height: "400px",
        })

    }
    public openCreatRoles(item): void {
        const dialogRef = this._matDialog.open(UpdateRolesModals, {
            width: "686px",
            height: "444px",
            data: {
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