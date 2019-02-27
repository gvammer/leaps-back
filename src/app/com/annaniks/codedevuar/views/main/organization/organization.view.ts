import { Component, OnInit } from "@angular/core";
import { OrganizationService } from './organization.service';
import { AddOrganization } from '../../../modals/add-organization/add-organization.modals';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: "app-organization",
    templateUrl: 'organization.view.html',
    styleUrls: ["organization.view.scss"]
})

export class OrganizationView implements OnInit {

    public organizationsData: any;
    public departments: any;
    constructor(private _organizationService: OrganizationService, private _dialog: MatDialog) { }

    ngOnInit() {
        this._gtusersOrganizations();
    }


    private _gtusersOrganizations() {
        this._organizationService.getusersOrganization()
            .subscribe((data: any) => {
                this.organizationsData = data;
                console.log(data);


            })
    }

    public openaddOrganization(): void {
        const diologRef = this._dialog.open(AddOrganization, {
            width: "686px",
            height: "444px",
        })
    }

}