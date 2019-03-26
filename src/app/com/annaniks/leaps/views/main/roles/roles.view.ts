import { Component, OnInit } from "@angular/core";
import { RolesService } from './roles.service';
import { MatDialog } from '@angular/material/dialog';
import { AddRolesModals} from '../../../modals';
import { Role } from '../../../models/models';


@Component({
    selector: "app-roles",
    templateUrl: "roles.view.html",
    styleUrls: ["roles.view..scss"]
})

export class RolesView implements OnInit {

    public rolesData: Role[] = [];
    public rolesItem: Role[] = [];
    public pageLength: number = 5;
    public page: number = 1;


    constructor(private _rolesService: RolesService, private _matDialog: MatDialog) { }

    ngOnInit() {
        this._getUsersRoles();
    }

    public onChangeRoles($event) {
        this.page = $event.pageNumber;
        this.rolesItem = this.rolesData.slice((this.page - 1) * this.pageLength, this.page * this.pageLength)
    }


    private _getUsersRoles() {
        this._rolesService.getUserRoles()
            .subscribe((data: Role[]) => {
                this.rolesData = data;
                this.rolesItem = this.rolesData.slice((this.page - 1) * this.pageLength, this.page * this.pageLength);

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