import { Component, OnInit } from "@angular/core";
import { OrganizationService } from './organization.service';
import { MatDialog } from '@angular/material/dialog';
import { AddOrganization } from '../../../modals';
import { Organization, Departments } from '../../../models/models';

@Component({
    selector: "app-organization",
    templateUrl: 'organization.view.html',
    styleUrls: ["organization.view.scss"]
})

export class OrganizationView implements OnInit {

    public organizationsData: Organization[]=[];
    public organizationItem:Organization[]=[];
    public departments:Departments[];
   public pageLength:number=5;
    public page:number=1;
    constructor(private _organizationService: OrganizationService, private _dialog: MatDialog) { }

    ngOnInit() {
        this._gtusersOrganizations();
    }

    public onChangeOrganization($event){
        this.page=$event.pageNumber;
        this.organizationItem=this.organizationsData.slice((this.page-1)*this.pageLength,this.page*this.pageLength)
    }


    private _gtusersOrganizations() {
        this._organizationService.getusersOrganization()
            .subscribe((data:Organization[]) => {
                this.organizationsData = data;
                this.organizationItem=this.organizationsData.slice((this.page-1)*this.pageLength,this.page*this.pageLength)
                console.log(data);


            })
    }

    public openaddOrganization(): void {
        const diologRef = this._dialog.open(AddOrganization, {
            width: "686px",
            height: "444px",
        })
    }

    public onClickEdit(item): void {
        const dialogRef = this._dialog.open(AddOrganization, {
            width: "686px",
            height: "444px",
            data: {
                editable: true,
                item: item
            }
        })
        dialogRef.afterClosed().subscribe((data) => {
            console.log(data);
        })
    }

}